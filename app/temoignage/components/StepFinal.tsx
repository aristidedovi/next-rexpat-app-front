import Link from "next/link";

const StepFinal = () => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step final: Sucess Result
      </h1>
      <div className="my-4">
        <h3>Data Submited Successfully to Server</h3>
        <Link href="/" className="-m-1.5 p-1.5">
          <p className="text-sm font-semibold text-black">Home page</p>
        </Link>
      </div>
    </div>
  );
};

export default StepFinal;
