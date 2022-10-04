import {
  Avatar, Button, Nav, Sidebar,
} from 'grommet';
import { Clock, Help, Projects } from 'grommet-icons';
import styles from './index.module.scss';

export function SideBar({ ...props }) {
  return (
    <div {...props}>
      <Sidebar
        className={styles['sidebar-content']}
        background="dark-1"
        round="small"
        header={
          <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
  }
        footer={
          <Button icon={<Help />} hoverIndicator />
  }
      >
        <Nav gap="small">
          <Button icon={<Projects />} hoverIndicator />
          <Button icon={<Clock />} hoverIndicator />
        </Nav>
      </Sidebar>
    </div>
  );
}

export default SideBar;
