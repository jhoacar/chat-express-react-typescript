import { useState, useEffect } from 'react';
import WebSocketService from '@services/websocket';
import PeerService from '@services/peer';

const websocket = new WebSocketService();
const peerService = new PeerService();

function Guest() {
  const [currentStream, setCurrentStream] = useState<any>();
  const [listUser, setListUser] = useState<Array<any>>([]);

  const addVideoUser = (stream: any) => {
    console.log('Adding video of the user', stream);
    const unique = new Set([...listUser, stream]);
    setListUser([...unique]);
  };

  const checkMediaDevices = () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
      .then((source: any) => {
        console.log(source);
        const stream = window.URL.createObjectURL(source);

        setCurrentStream(stream);

        addVideoUser(stream);
      })
      .catch((error) => {
        console.log('*** ERROR *** Not permissions ', error);
      });
  };

  const sendCall = (idPeer:any, stream:any) => {
    const newUserCall = peerService.peer.call(idPeer, stream);
    if (newUserCall) {
      newUserCall.on('stream', (userStream) => {
        addVideoUser(userStream);
      });
    }
  };

  const initSocket = () => {
    websocket.listener((eventName, data) => {
      if (eventName === 'new-user') {
        const { idPeer } = data;
        sendCall(idPeer, currentStream);
      }
    });
  };

  const initPeer = () => {
    const { peer } = peerService;
    peer.on('open', (id) => {
      const body = {
        idPeer: id,
        roomName: 'room',
      };

      websocket.joinRoom(body);
    });

    peer.on('call', (callEnter) => {
      callEnter.answer(currentStream);
      callEnter.on('stream', (streamRemote) => {
        addVideoUser(streamRemote);
      });
    }, (err: any) => {
      console.log('*** ERROR *** Peer call ', err);
    });
  };

  useEffect(() => {
    checkMediaDevices();
    initPeer();
    initSocket();
  }, []);

  return (
    <div>
      {listUser.map((user, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          {user && <video src={user} autoPlay />}
        </div>
      ))}
    </div>
  );
}

export default Guest;
