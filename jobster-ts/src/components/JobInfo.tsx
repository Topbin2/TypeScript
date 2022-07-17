import Wrapper from "../assets/wrappers/JobInfo";

interface IProps {
  icon: JSX.Element;
  text: string;
}

const JobInfo: React.FC<IProps> = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text.toString()}</span>
    </Wrapper>
  );
};

export default JobInfo;
