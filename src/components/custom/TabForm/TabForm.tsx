'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";


export type TabsFormProps = {
    tabs: {
        name: string
        description?: string
        content: React.ReactNode
    }[]
}

const TabsForm = ({ tabs }: TabsFormProps) => {

    const cols = `grid w-full  grid-cols-3 gap-4`
    return (
        <Tabs defaultValue={tabs[0]?.name} className="w-full p-5">
            <TabsList className={cols}>
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.name} value={tab.name}>
                        {tab.name}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.name} value={tab.name}>
                    <Card>
                        <CardHeader>
                            <CardTitle>{tab.name}</CardTitle>
                            {tab.description && (
                                <CardDescription>
                                    {tab.description}
                                </CardDescription>
                            )}
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {tab.content}
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            ))}
        </Tabs>
    )
};

export default TabsForm;