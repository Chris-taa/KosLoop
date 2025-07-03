// src/components/ChatPopup.jsx
import React, { useState, useEffect } from 'react';
import './CSS/ChatPopUp.css';

const ChatPopup = ({ isOpen, onClose, initialProductData }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [activeChat, setActiveChat] = useState(null); // State untuk chat yang sedang aktif
    const [messages, setMessages] = useState({}); // { chatId: [{ text, sender, time, type }] }
    const [inputText, setInputText] = useState('');

    // Dummy data riwayat chat
    const [chatHistory, setChatHistory] = useState([
        {
            id: 'chat-oneggplustore',
            shopName: 'oneggplustore',
            shopIcon: 'O',
            lastMessage: 'Halo kak, selamat data...',
            lastMessageTime: '00:01',
            unreadCount: 1,
            productPreview: {
                id: initialProductData?.id || 'prod-default', // Menggunakan ID produk dari Detail.js jika ada
                name: initialProductData?.name || 'Folding phone stand hd23...',
                price: initialProductData?.price || 6100,
                image: initialProductData?.image || 'https://images.tokopedia.net/img/cache/100/VqbcmM/2023/12/1/1234abcd-5678-90ef-1234-567890abcdef.jpg' // Gambar dummy
            },
            messages: [
                { id: 1, text: 'Halo kak, selamat datang...', sender: 'oneggplustore', time: 'Hari ini', type: 'incoming' },
                { id: 2, text: 'Produk', sender: 'system', time: '00:01', type: 'system' },
                { id: 3, text: 'Pengiriman', sender: 'system', time: '00:01', type: 'system' },
                { id: 4, text: 'Pembayaran', sender: 'system', time: '00:01', type: 'system' },
                { id: 5, text: 'Dikirim oleh Asisten AI Toko', sender: 'system', time: '00:01', type: 'system' },
                { id: 6, text: 'Kamu menanyakan tentang produk ini.', sender: 'system', type: 'system-product-query' },
                { id: 7, text: 'Halo, apakah produk ini masih tersedia?', sender: 'me', time: '00:05', type: 'outgoing' },
            ]
        },
        {
            id: 'chat-tokoteknopro',
            shopName: 'TokoTeknoPro',
            shopIcon: 'T',
            lastMessage: 'Ada pertanyaan?',
            lastMessageTime: 'Kemarin',
            unreadCount: 0,
            productPreview: {
                id: 'prod-gamepad',
                name: 'Fantech WGP15 V2s Gamepad',
                price: 399000,
                image: 'https://images.tokopedia.net/img/cache/100/VqbcmM/2023/11/14/b42784ae-f418-4033-a3b0-6813ce8288cf.jpg'
            },
            messages: [
                { id: 1, text: 'Halo, selamat datang di TokoTeknoPro. Ada pertanyaan?', sender: 'TokoTeknoPro', time: 'Kemarin', type: 'incoming' },
            ]
        },
        // Tambahkan chat dummy lain di sini
    ]);

    // Mengatur chat aktif berdasarkan initialProductData saat pertama kali dibuka
    useEffect(() => {
        if (isOpen && initialProductData && initialProductData.shopName) {
            const foundChat = chatHistory.find(chat => chat.shopName === initialProductData.shopName);
            if (foundChat) {
                setActiveChat(foundChat.id);
            } else {
                // Jika tidak ada chat history, buat yang baru (sederhana)
                const newChatId = `chat-${initialProductData.shopName.toLowerCase().replace(/\s/g, '')}-${Date.now()}`;
                const newChat = {
                    id: newChatId,
                    shopName: initialProductData.shopName,
                    shopIcon: initialProductData.shopName.charAt(0).toUpperCase(),
                    lastMessage: `Kamu menanyakan tentang ${initialProductData.name}`,
                    lastMessageTime: 'Baru',
                    unreadCount: 0,
                    productPreview: {
                        id: initialProductData.id,
                        name: initialProductData.name,
                        price: initialProductData.price,
                        image: initialProductData.image
                    },
                    messages: [
                        { id: 1, text: 'Halo, ada yang bisa kami bantu?', sender: initialProductData.shopName, time: 'Sekarang', type: 'incoming' },
                        { id: 2, text: 'Kamu menanyakan tentang produk ini.', sender: 'system', type: 'system-product-query' },
                    ]
                };
                setChatHistory(prev => [newChat, ...prev]);
                setActiveChat(newChatId);
            }
        } else if (isOpen && !activeChat && chatHistory.length > 0) {
            // Jika tidak ada initialProductData, dan belum ada chat aktif, pilih yang pertama
            setActiveChat(chatHistory[0].id);
        }
    }, [isOpen, initialProductData, chatHistory, activeChat]); // Dependensi

    if (!isOpen) return null;

    const currentChat = chatHistory.find(chat => chat.id === activeChat);

    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const handleClose = () => {
        onClose();
        setIsMinimized(false);
        setActiveChat(null); // Reset active chat saat ditutup
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '' || !currentChat) return;

        const newMessage = {
            id: currentChat.messages.length + 1,
            text: inputText,
            sender: 'me',
            time: 'Sekarang', // Waktu real-time bisa disesuaikan
            type: 'outgoing'
        };

        setChatHistory(prevHistory =>
            prevHistory.map(chat =>
                chat.id === activeChat
                    ? {
                        ...chat,
                        messages: [...chat.messages, newMessage],
                        lastMessage: inputText,
                        lastMessageTime: 'Sekarang',
                        unreadCount: 0 // Asumsi kita sedang melihat chat ini
                    }
                    : chat
            ).sort((a, b) => (a.id === activeChat ? -1 : b.id === activeChat ? 1 : 0)) // Pindahkan chat aktif ke atas
        );
        setInputText('');
    };

    const renderMessageContent = (msg) => {
        if (msg.type === 'system-product-query' && currentChat?.productPreview) {
            return (
                <div className="chat-product-preview-in-message">
                    <img src={currentChat.productPreview.image} alt={currentChat.productPreview.name} />
                    <div className="details">
                        <p className="product-name">{currentChat.productPreview.name}</p>
                        <p className="product-price">Rp{currentChat.productPreview.price.toLocaleString('id-ID')}</p>
                        <button className="beli-sekarang-btn">Beli Sekarang</button>
                    </div>
                </div>
            );
        }
        return msg.text;
    };


    return (
        <div className={`chat-popup-container ${isMinimized ? 'minimized' : ''}`}>
            <div className="chat-popup-header" onClick={isMinimized ? handleMinimize : undefined}> {/* Klik header hanya untuk minimize/restore */}
                <div className="chat-shop-info">
                    {/* Icon untuk toggle sidebar di header utama */}
                    {!isMinimized && (
                        <i className="fas fa-bars chat-action-icon chat-sidebar-toggle"></i>
                    )}
                    {currentChat ? (
                        <>
                            <span className="shop-icon-chat">{currentChat.shopIcon}</span>
                            <span className="shop-name-chat">{currentChat.shopName}</span>
                        </>
                    ) : (
                        <span className="shop-name-chat">Pilih Chat</span>
                    )}
                </div>
                <div className="chat-header-actions">
                    <i className="fas fa-minus chat-action-icon" onClick={handleMinimize}></i>
                    <i className="fas fa-times chat-action-icon" onClick={handleClose}></i>
                </div>
            </div>

            {!isMinimized && (
                <div className="chat-popup-body">
                    {/* Sidebar Daftar Chat */}
                    <div className="chat-sidebar">
                        <div className="sidebar-header">
                            <input type="text" placeholder="Cari nama" className="search-chat-input" />
                            <select className="filter-chat-select">
                                <option>Semua</option>
                                <option>Belum Dibalas</option>
                                <option>Chat Disematkan</option>
                            </select>
                        </div>
                        <div className="chat-list">
                            {chatHistory.map(chat => (
                                <div
                                    key={chat.id}
                                    className={`chat-list-item ${activeChat === chat.id ? 'active' : ''}`}
                                    onClick={() => setActiveChat(chat.id)}
                                >
                                    <div className="chat-avatar">
                                        <img src={chat.productPreview.image} alt="Avatar" />
                                    </div>
                                    <div className="chat-details">
                                        <div className="chat-name-time">
                                            <span className="chat-name">{chat.shopName}</span>
                                            <span className="chat-time">{chat.lastMessageTime}</span>
                                        </div>
                                        <p className="last-message">{chat.lastMessage}</p>
                                    </div>
                                    {chat.unreadCount > 0 && <span className="unread-badge">{chat.unreadCount}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Area Pesan Aktif */}
                    <div className="chat-active-conversation">
                        {currentChat ? (
                            <>
                                <div className="chat-conversation-header">
                                    <div className="chat-shop-info-current">
                                        <span className="shop-icon-chat">{currentChat.shopIcon}</span>
                                        <span className="shop-name-chat">{currentChat.shopName}</span>
                                    </div>
                                    <div className="conversation-actions">
                                        <i className="fas fa-search chat-action-icon"></i>
                                        <i className="fas fa-ellipsis-v chat-action-icon"></i>
                                    </div>
                                </div>

                                <div className="chat-messages-area">
                                    {currentChat.messages.map(msg => (
                                        <div key={msg.id} className={`chat-message ${msg.type}`}>
                                            {msg.type !== 'system' && msg.type !== 'system-product-query' && (
                                                <span className="chat-sender">{msg.sender}</span>
                                            )}
                                            {msg.type === 'incoming' || msg.type === 'outgoing' ? (
                                                <span className="chat-time">{msg.time}</span>
                                            ) : null}
                                            <div className="message-bubble">
                                                {renderMessageContent(msg)}
                                            </div>
                                        </div>
                                    ))}
                                    {/* Product preview yang mungkin otomatis terkirim */}
                                    {currentChat.productPreview && currentChat.messages.some(msg => msg.type === 'system-product-query') && (
                                        <div className="chat-product-preview">
                                            <img src={currentChat.productPreview.image} alt={currentChat.productPreview.name} className="chat-product-image" />
                                            <div className="chat-product-details">
                                                <p className="chat-product-name">{currentChat.productPreview.name}</p>
                                                <p className="chat-product-price">Rp{currentChat.productPreview.price.toLocaleString('id-ID')}</p>
                                                <button className="beli-sekarang-btn">Beli Sekarang</button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="chat-input-area">
                                    <textarea
                                        placeholder="Tulis pesan..."
                                        rows="1"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) { // Kirim saat Enter ditekan (tanpa Shift)
                                                e.preventDefault();
                                                handleSendMessage();
                                            }
                                        }}
                                    ></textarea>
                                    <button className="chat-send-button" onClick={handleSendMessage}>
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="no-chat-selected">Pilih chat dari daftar.</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPopup;