import { BiSearch } from "react-icons/bi";
import { Button, Flex, Input, Modal } from "antd";

import { Item } from "./components/Item";

import { useSearchPageController } from "./useSearchPageController";

import './styles.scss'

export function SearchPage() {
  const {
    translate,
    searchTerm,
    isModalOpen,
    filteredContacts,
    openModal,
    closeModal,
    navigateTo,
    handleChangeSearchTerm,
  } = useSearchPageController();

  return (
    <>
      <Flex align="center" gap={1}>
        <Button
          className="search-pages-button"
          type="text"
          shape="circle"
          onClick={openModal}
        >
          <BiSearch size={20} />
        </Button>

        <span className="search-page-tag">Ctrl+K</span>
      </Flex>

      <Modal
        title={null}
        open={isModalOpen}
        onCancel={closeModal}
        closeIcon={null}
        footer={null}
        width={600}
        styles={{
          content: {
            borderRadius: 16,
            padding: 0,
          }
        }}
      >
        <div id="input-container">
          <Input
            value={searchTerm}
            size="large"
            variant="borderless"
            placeholder={translate('search-placeholder')}
            prefix={<BiSearch size={22} />}
            onChange={handleChangeSearchTerm}
          />

          <span className="search-page-tag">Esc</span>
        </div>

        <div id="pages-list">
          {filteredContacts.map((route: any) => (
            <Item
              key={route.path}
              label={route.id}
              pathParts={route.pathParts}
              onClick={() => navigateTo(route.path)}
            />
          ))}

          {filteredContacts.length === 0 && (
            <div id="search-page-not-found-message">
              <strong>{translate('not-found.title')}</strong>
              <p>{translate('not-found.no-results')} <b>"{searchTerm}"</b>.</p>
              <p>{translate('not-found.suggestion')}</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
