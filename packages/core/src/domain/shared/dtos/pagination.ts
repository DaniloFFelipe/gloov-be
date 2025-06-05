import { z } from 'zod'

export const paginatedMetadataSchema = z.object({
  total: z.number(),
  perPage: z.coerce.number(),
  pageIndex: z.coerce.number(),
  nextPageIndex: z.number().nullable(),
})

export const paginatedSchema = z.object({
  meta: paginatedMetadataSchema,
})

export type PaginatedMetadata = z.infer<typeof paginatedMetadataSchema>

export interface Paginated<Data> {
  meta: PaginatedMetadata
  data: Data[]
}

export interface Pagination {
  perPage: number
  pageIndex: number
}

export const defaultPagination: Pagination = {
  pageIndex: 0,
  perPage: 20,
}

export const createPaginationSchema = <Z extends z.ZodSchema>(zSchema: Z) => {
  return z.object({
    meta: paginatedMetadataSchema,
    data: z.array(zSchema),
  })
}

export function createPaginationResponse<Data>(
  data: Data[],
  total: number,
  pagination: Pagination
): Paginated<Data> {
  const hasNext = total / pagination.perPage > pagination.pageIndex + 1
  const response: Paginated<(typeof data)[0]> = {
    data,
    meta: {
      nextPageIndex: hasNext ? pagination.pageIndex + 1 : null,
      pageIndex: pagination.pageIndex,
      perPage: pagination.perPage,
      total,
    },
  }

  return response
}

export const paginationSchema = z.object({
  perPage: z.coerce.number().min(1).default(20),
  pageIndex: z.coerce.number().min(0).default(0),
})

export class Page {
  constructor(private dto: Pagination) {}

  buildResponse<D>(data: D[], total: number) {
    return createPaginationResponse(data, total, this.dto)
  }
  get pageIndex() {
    return this.dto.pageIndex
  }

  get perPage() {
    return this.dto.perPage
  }

  get offset() {
    return this.dto.pageIndex * this.dto.perPage
  }

  get limit() {
    return this.dto.perPage
  }
}
