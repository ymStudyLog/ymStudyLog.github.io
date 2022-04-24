import React, { useState } from 'react';

const CommentTemplate = ({ children }) => {
  const [comment, setComment] = useState({
    nickname: '',
    input: '',
    when: {
      date: '',
      time: '',
    },
  });

  const onInsert = (e) => {
    e.preventDefault();
    console.log('submit 이벤트 발생');
    //빈칸 검증도 하기
    //submit한 날짜와 시간 자동으로 state에 넣어주기
  };

  return (
    <div name="comment" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <h3 className="inline text-4xl font-bold border-b-4 border-[#182848] mr-4">
            Comment
          </h3>

          {/* CommentInsert */}
          <form onSubmit={onInsert} className="">
            <input type="text" name="nickname" placeholder="닉네임" size={12} />
            <input
              size={50}
              type="text"
              name="input"
              placeholder="당신의 의견을 댓글로 남겨주세요."
            />
            <button
              type="submit"
              className="ml-1 p-2 font-bold border-2 rounded-lg border-[#182848] bg-[#182848] text-white"
            >
              submit
            </button>
          </form>
        </div>

        {/* CommentList */}
        <div className="mt-6 w-[830px] h-[280px]"></div>
      </div>
    </div>
  );
};

export default CommentTemplate;
