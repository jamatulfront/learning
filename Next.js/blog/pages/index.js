import toast from "react-hot-toast";
export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success("Activation Complete !")}>
        Toast me
      </button>
    </div>
  );
}
