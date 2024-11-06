import FormBuilder from "@/components/FormBuilder";
import { staticData } from "@/lib/data/static-data";

export default function Home() {
  return (
    <div>
      <FormBuilder data={staticData} />
    </div>
  );
}
