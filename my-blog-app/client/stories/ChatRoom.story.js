import React from 'react';
import ChatRoom from '../components/ChatRoom';

export default {
  title: 'ChatRoom',
  component: ChatRoom,
};

const Template = (args) => <ChatRoom {...args} />;

export const Default = Template.bind({});
Default.args = { roomId: '1' };
