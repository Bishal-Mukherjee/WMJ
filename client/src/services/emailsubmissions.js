import axios from "axios";

export const emailsubmission = async (params) => {
  const { email, pin } = params;
  const response = await axios({
    url: `${process.env.REACT_APP_SERVER_URL}/api/submissions/emailSubmission`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify({ email, pin }),
  });

  return { data: response.data };
};
