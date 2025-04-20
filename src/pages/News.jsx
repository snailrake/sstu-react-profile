import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const News = () => {
    const news = useSelector((state) => state.news);
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const currentUser = localStorage.getItem('username');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [editIndex, setEditIndex] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const handleAddNews = () => {
        if (!title.trim() || !content.trim()) return;

        const newItem = {
            title,
            content,
            author: currentUser,
        };

        const updatedNews = [...news, newItem];
        dispatch({ type: 'SET_NEWS', payload: updatedNews });

        setTitle('');
        setContent('');
    };

    const handleDelete = (index) => {
        const updatedNews = [...news];
        updatedNews.splice(index, 1);
        dispatch({ type: 'SET_NEWS', payload: updatedNews });
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditTitle(news[index].title);
        setEditContent(news[index].content);
    };

    const handleSaveEdit = () => {
        const updatedNews = [...news];
        updatedNews[editIndex] = {
            ...updatedNews[editIndex],
            title: editTitle,
            content: editContent,
        };
        dispatch({ type: 'SET_NEWS', payload: updatedNews });
        setEditIndex(null);
    };

    return (
        <div style={{ position: 'relative', padding: '40px 20px' }}>
            <div style={{ width: '600px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center' }}>Новости</h1>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                    {news.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                marginBottom: '10px',
                                wordWrap: 'break-word',
                                overflowWrap: 'anywhere',
                                border: '2px solid #007BFF',
                                borderRadius: '6px',
                                padding: '15px',
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            {editIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        style={{ width: '100%' }}
                                    />
                                    <textarea
                                        value={editContent}
                                        onChange={(e) => setEditContent(e.target.value)}
                                        rows={3}
                                        style={{ width: '100%', marginTop: '5px' }}
                                    />
                                    <div style={{ marginTop: '10px' }}>
                                        <button onClick={handleSaveEdit}>Сохранить</button>
                                        <button onClick={() => setEditIndex(null)} style={{ marginLeft: '10px' }}>
                                            Отмена
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 style={{ marginBottom: '5px' }}>{item.title}</h3>
                                    <p style={{ marginBottom: '5px', fontStyle: 'italic' }}>Автор: {item.author}</p>
                                    <p>{item.content}</p>
                                    {isAuthenticated && currentUser === item.author && (
                                        <div style={{ marginTop: '10px' }}>
                                            <button className="news-button" onClick={() => handleEdit(index)}>Изменить</button>
                                            <button className="news-button" onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
                                                Удалить
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {isAuthenticated && (
                <div
                    style={{
                        position: 'absolute',
                        left: 'calc(50% + 320px)',
                        top: '120px',
                        width: '300px',
                        border: '2px solid #007BFF',
                        borderRadius: '6px',
                        padding: '15px',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <h2 style={{ marginTop: 0, marginBottom: '10px' }}>Добавить новость</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Заголовок"
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Содержание"
                        rows={4}
                        style={{ width: '100%', resize: 'vertical' }}
                    />
                    <button className="news-button" onClick={handleAddNews} style={{ marginTop: '10px', width: '100%' }}>Добавить</button>
                </div>
            )}
        </div>
    );
};

export default News;
