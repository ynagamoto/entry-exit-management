import { useRouter  } from "next/router"

export default function Name() {
  const router = useRouter();
  return (
    <div>
      <h1>{ router.query.name }です</h1>
    </div>
  );
}
