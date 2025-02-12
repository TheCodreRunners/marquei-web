import { Card } from "@/components/ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

export type RowDataType = Record<string, unknown>[] | null;

export function DataTable({
  dataList,
  rowKeys,
}: {
  dataList: any[];
  rowKeys: {
    id: string;
    name: string;
  }[];
}) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            {rowKeys.map((key) => (
              <TableHead key={key.id}>{key.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataList &&
            dataList.map((dataItem: Record<string, unknown>) => (
              <TableRow key={dataItem.id as string}>
                {rowKeys.map((key) => (
                  <TableCell key={key.id}>{dataItem[key.id]}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}