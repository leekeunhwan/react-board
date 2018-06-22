import React from 'react';
import withAuth from '../hocs/withAuth';
import boardAPI from '../boardAPI';

class Write extends React.Component {
  titleRef = React.createRef();
  bodyRef = React.createRef();

  handleWriteClick = async e => {
    const payload = {
      title: this.titleRef.current.value,
      body: this.bodyRef.current.value,
    };
    e.preventDefault();
    const res = await boardAPI.post(`posts`, payload);
    window.location.replace('/');
  };

  render() {
    return (
      <React.Fragment>
        <h1>글 쓰는 공간</h1>
        <form>
          제목 :
          <p>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              size="100"
              ref={this.titleRef}
              required
            />
          </p>
          내용 :
          <p>
            <textarea
              cols="100"
              rows="10"
              placeholder="내용을 입력해주세요"
              ref={this.bodyRef}
              required
            />
          </p>
          <button onClick={e => window.location.replace('/')}>뒤로 가기</button>
          <button onClick={this.handleWriteClick}>작성하기</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withAuth('/login')(Write);
