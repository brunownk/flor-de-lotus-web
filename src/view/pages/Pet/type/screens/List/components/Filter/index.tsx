import { Flex } from "antd";
import { Button, Form, Space } from "@components";

import { usePetListFilter } from "./usePetListFilter";

import { FilterProps } from "./Filter";

import './styles.scss';

export function PetListFilter({
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
  } = usePetListFilter({
    initialFilters,
    updateFilters,
    clearFilters
  });

  return (
    <Form
      className="pet-list-filter"
      methods={methods}
      onSubmit={handleSubmit}
    >
      <Space size={32}>
        <Space size={16}>
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
