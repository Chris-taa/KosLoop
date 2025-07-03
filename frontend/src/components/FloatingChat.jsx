// src/components/FloatingChatButton.jsx
import React from 'react';
import './CSS/FloatingChat.css';

const FloatingChatButton = ({ onClick }) => {
  return (
    <button className="floating-chat-button" onClick={onClick}>
      <i className="fas fa-comment-dots"></i> {/* Icon chat bubbles */}
      <span>Chat</span>
    </button>
  );
};

export default FloatingChatButton;