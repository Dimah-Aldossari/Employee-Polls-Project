// AddQuestion.js

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _saveQuestion } from '../_DATA';
import { createQuestion } from '../actions/questionsSlice';
import { useNavigate } from 'react-router-dom';

const AddQuestion = () => {
    const dispatch = useDispatch();
    const authUser = useSelector((state) => state.authSlice.user);
    const navigate = useNavigate();

    const [options, setOptions] = useState({
        optionOneText: '',
        optionTwoText: '',
        author: authUser ? authUser.id : null,

    });

    const handleInputChange = (e, option) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [option]: e.target.value,
        }));
    };

    const handleCreateQuestion = async () => {
        try {
            const newQuestion = await _saveQuestion({
                optionOneText: options.optionOneText,
                optionTwoText: options.optionTwoText,
                author: authUser, // تغيير هنا
            });
            dispatch(createQuestion(newQuestion));

            // يمكنك إعادة توجيه المستخدم إلى صفحة أخرى بعد إنشاء السؤال
            navigate('/Home');
        } catch (error) {
            console.error('Error creating question:', error);
        }
    };

    return (
        <div className='Create-Question'>
            <h2>Create a New Question</h2>
            <div className='Option'>
                <label
                    data-testid="firstOptionLabel">
                    Option One:
                    <input
                        data-testid="firstOption"
                        className='input'
                        type="text"
                        value={options.optionOneText}
                        onChange={(e) => handleInputChange(e, 'optionOneText')}
                    />
                </label>
            </div>
            <div className='Option'>
                <label
                    data-testid="secondOptionLabel"
                >
                    Option Two:
                    <input
                        data-testid="secondOption"
                        className='input'
                        type="text"
                        value={options.optionTwoText}
                        onChange={(e) => handleInputChange(e, 'optionTwoText')}
                    />
                </label>
            </div>
            <button data-testid="submit-poll" className='btn' onClick={handleCreateQuestion}>Create Question</button>
        </div>
    );
};

export default AddQuestion;
