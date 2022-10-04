import {
  Avatar,
  Button, Nav, Sidebar,
} from 'grommet';
import {
  Clock, Help, Projects, User,
} from 'grommet-icons';
import styles from './index.module.scss';

export function SideBar() {
  return (
    <Sidebar
      background="dark-1"
      className={styles['sidebar-content']}
      header={
        <Avatar><User /></Avatar>
      }
      footer={
        <Button icon={<Help />} />
      }

    >
      <Nav gap="small">
        <Button icon={<Projects />} />
        <Button icon={<Clock />} />
      </Nav>
    </Sidebar>
  );
}

export default SideBar;
