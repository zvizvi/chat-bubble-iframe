
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConfigCode from "./ConfigCode";
import ApiCode from "./ApiCode";
import { ConfigDisplayProps } from "./types";

const ConfigTabs = (props: ConfigDisplayProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
      <Tabs defaultValue="config">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="config" className="flex-1">Configuration</TabsTrigger>
          <TabsTrigger value="api" className="flex-1">PostMessage API</TabsTrigger>
        </TabsList>
        
        <TabsContent value="config">
          <ConfigCode {...props} />
        </TabsContent>
        
        <TabsContent value="api">
          <ApiCode />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConfigTabs;
