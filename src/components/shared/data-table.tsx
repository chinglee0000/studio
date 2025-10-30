import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EmptyState } from "./empty-state"
import { Inbox } from "lucide-react"

interface Column<T> {
  header: string
  accessor: keyof T | ((row: T) => React.ReactNode)
  className?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  emptyState?: {
    title: string
    description: string
    actionLabel?: string
    actionHref?: string
  }
  getRowKey: (row: T) => string
}

export function DataTable<T>({
  data,
  columns,
  emptyState,
  getRowKey,
}: DataTableProps<T>) {
  if (data.length === 0 && emptyState) {
    return (
      <EmptyState
        icon={Inbox}
        title={emptyState.title}
        description={emptyState.description}
        actionLabel={emptyState.actionLabel}
        actionHref={emptyState.actionHref}
      />
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index} className={column.className}>
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={getRowKey(row)}>
            {columns.map((column, index) => (
              <TableCell key={index} className={column.className}>
                {typeof column.accessor === "function"
                  ? column.accessor(row)
                  : String(row[column.accessor])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
