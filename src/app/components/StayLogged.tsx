import { Checkbox } from "@chakra-ui/checkbox";

export default function StayLogged() {
  return (
    <div className="flex w-5/6 gap-2 p-2">
      <Checkbox colorScheme="green" defaultChecked>
        Manter conectado
      </Checkbox>
    </div>
  );
}
