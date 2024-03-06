// TODO: need to add PDF view

// @deprecate

type Props = {};

const Resume = (props: Props) => {
  return (
    <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <embed
        style={{
          width: "100%",
          height: "100%",
        }}
        type="application/pdf"
        src={"/Himanshu_Soni_Fullstack_v1.3.pdf"}
        about="Himanshu's Fullstack Resume"
        title="Himanshu's Fullstack Resume"
      />
    </div>
  );
};

export default Resume;
