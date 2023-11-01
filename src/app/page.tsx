import { ComponentWithContext } from "@/componentWithContext";
import { ExampleContextProvider } from "@/componentWithContext/useExampleContext";
import { ComponentWithContextAndMemo } from "@/componentWithContextAndMemo";
import { ExampleContextProvider as ExampleContextProviderMemo } from "@/componentWithContextAndMemo/useExampleContext";
import { ComponentWithZustand } from "@/componentWithZustand";
import { ComponentWithZustandAndMemo } from "@/componentWithZustandAndMemo";

export default function Home() {
  return (
    <div className="flex gap-4">
      <div className="w-full flex flex-col items-center">
        <b>React Context Section</b>
        <ExampleContextProvider>
          <ComponentWithContext />
        </ExampleContextProvider>
        <ExampleContextProviderMemo>
          <ComponentWithContextAndMemo />
        </ExampleContextProviderMemo>
      </div>
      <div className="w-full flex flex-col  items-center">
        <b>Zustand Section</b>
        <ComponentWithZustand />
        <ComponentWithZustandAndMemo />
      </div>
    </div>
  );
}
