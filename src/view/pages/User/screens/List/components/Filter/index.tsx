import { Flex } from "antd";
import { Button, Form, Space } from "@components";

import { useUserListFilter } from "./useUserListFilter";

import { FilterProps } from "./Filter";

import './styles.scss';

export function UserListFilter({
  initialFilters,
  updateFilters,
  clearFilters
}: FilterProps) {
  const {
    methods,
    translateFilter,
    translateButton,
    handleSubmit,
    handleReset,
  } = useUserListFilter({
    initialFilters,
    updateFilters,
    clearFilters
  });

  return (
    <Form
      className="user-list-filter"
      methods={methods}
      onSubmit={handleSubmit}
    >
      <Space size={32}>
        <Space size={16}>
          <Form.ToggleGroup
            name="withDeleted"
            size="small"
            label={translateFilter('filter-type')}
            options={[
              { value: false, label: translateFilter('filter-type-all') },
              { value: true, label: translateFilter('filter-type-active') },
            ]}
          />

          <Form.Input name="search" label={translateFilter('filter-search')} />
        </Space>

        <Flex justify="flex-end" gap={8}>
          <Button danger type="link" onClick={handleReset}>
            {translateButton('clear')}
          </Button>

          <Button htmlType="submit">
            {translateButton('submit-filter')}
          </Button>
        </Flex>
      </Space>
    </Form>
  )
}
