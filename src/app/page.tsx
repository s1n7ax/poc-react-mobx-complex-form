import FormBuilder from "@/components/FormBuilder";
import { data } from "@/lib/data/data";
import { staticData } from "@/lib/data/static-data";

export default function Home() {
  console.log(data);

  return (
    <div>
      <FormBuilder data={staticData} />
    </div>
  );
}
