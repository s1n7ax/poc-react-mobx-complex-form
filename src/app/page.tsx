import Form from "@/components/Form";
import { data } from "@/lib/data/data";

export default function Home() {
  const formData = data;

  return (
    <div>
      <Form formData={formData} />
    </div>
  );
}
