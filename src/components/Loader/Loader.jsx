import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeDots
      height="20"
      width="80"
      radius="1"
      color="#18307e"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
