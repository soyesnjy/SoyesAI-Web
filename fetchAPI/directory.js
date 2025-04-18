import axios from 'axios';

// READ
export const handleDirectoryGet = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/directory`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log('Gpt API 호출 실패');
    console.error(err);
    return {
      status: err.response.status,
    };
  }
};
// CREATE
export const handleDirectoryCreate = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/directory/create`,
      { data: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log('ReviewCreate API 호출 실패');
    console.error(err);
    return {
      status: 400,
    };
  }
};
// DELETE (Todo)
export const handleDirectoryDelete = async (uri) => {
  try {
    const response = await axios.delete(`${uri}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    // console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
// UPDATE (Todo)
export const handleDirectoryUpdate = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/review/update`,
      { ReviewData: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    // console.log(response);
    return response;
  } catch (err) {
    console.log('Gpt API 호출 실패');
    console.error(err);
    return {
      status: err.response.status,
      message: '미안해 지금은 대화가 힘들어...조금 뒤에 다시 말해줄래?',
      emotion: 0,
    };
  }
};
