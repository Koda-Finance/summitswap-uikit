import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig, LangType } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
}));

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang=""
        cakePriceUsd={0.23158668932877668}
        kodaPriceUsd={0.00091815}
        links={menuConfig}
        showConnectButton={true}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-jUEnpm krhazU"
      >
        <div
          class="sc-dlfnbm sc-hKgILt isWJdv AmOVA"
        >
            class="sc-dacFzL joTRHM"
          >
            <div
              class="sc-dlfnbm sc-hKgILt lkQHhn gPTDCk"
            >
              <div
                class="sc-aemoO joZXWn"
              >
                <a
                  href="/"
                >
                  <div
                    class="sc-jHVexB hVKhbQ"
                  />
                </a>
              </div>
              <div
                class="sc-dlfnbm sc-hKgILt sc-dtwoBo isWJdv jszezi leNCJm"
              >
                <div>
                  <button
                    class="sc-gsTCUz bFLUht"
                    scale="sm"
                  >
                    0xbd...c980
                  </button>
                </div>
                <svg
                  class="sc-eCssSg gQJWre"
                  color="sidebarColor"
                  cursor="pointer"
                  height="40px"
                  viewBox="0 0 24 24"
                  width="35px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="sc-dlfnbm sc-hKgILt sc-jONnTn kvYdsH clYVkQ kjPVLb"
            >
              <div
                class="sc-kIeTtH jdFgRD"
              >
                <div
                  class="sc-gGmIRh iMzIqc"
                >
                  <div
                    class="sc-lcujXC dMQYQq"
                  />
                  <div
                    class="sc-dlfnbm isWJdv"
                  >
                    $0.00091815
                  </div>
                </div>
              </div>
              <div
                class="sc-hOqqkJ snRfr"
              >
                <a
                  href="https://discord.com/invite/FBgEmJmHuc"
                >
                  <svg
                    class="sc-eCssSg fQrLiT"
                    color="primary"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      height="22"
                      width="22"
                      xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwOTlFQkRFMUFCMDExRUNCMjU1Q0ZDRTA4NzVFMTMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwOTlFQkRGMUFCMDExRUNCMjU1Q0ZDRTA4NzVFMTMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjA5OUVCREMxQUIwMTFFQ0IyNTVDRkNFMDg3NUUxMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjA5OUVCREQxQUIwMTFFQ0IyNTVDRkNFMDg3NUUxMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bVx7+AAABD0lEQVR42tSVgRHCIAwApecAOIF0AhmBDXQDO0o3qU5QN2hHcAPcoG4QE42VVkBPqXfmLtc7kjwpCUEAwGwKyWa/FPwLhVrBTbTHrtlGPupdaAkPaSLgxvErX0GrEZTUwrNYx36XKgQt4HspfGCbAGwHXYELG/yoBHVXzOrbbZ2wqa4swRl3+JGJwGchxCLjdpIJM5bEpKMwAYcWdxahaLa1AbMh8GqCy7ucR7rBQGRCQXx6aZG4cH0BMw/09AFoHCN9Y/OAmqPuaOdYVuyTc8ywuDRIPJ1B1d5zgOY6KCc70iMq3bKtNx7B1Hd14O7XkeKFYmhCStfR8GLHDl1siPNj4PpSrHGP4r/evIsAAwAEVK6XOKORxAAAAABJRU5ErkJggg=="
                    />
                  </svg>
                </a>
                <a
                  href="https://t.me/kodakingofdogaltschat"
                >
                  <svg
                    class="sc-eCssSg fQrLiT"
                    color="primary"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      height="22"
                      width="22"
                      xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1NzY4QkM1MUFCMDExRUNCQ0RCRTU5MjkwMkRFNTJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1NzY4QkM2MUFCMDExRUNCQ0RCRTU5MjkwMkRFNTJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDU3NjhCQzMxQUIwMTFFQ0JDREJFNTkyOTAyREU1MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDU3NjhCQzQxQUIwMTFFQ0JDREJFNTkyOTAyREU1MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5EvOKlAAAA60lEQVR42mL8//8/Ay0AE8NgB0CfBwDx/P8Q8J5SwxSAuB+I7/9HA+QYJgDECUB8/j9u8J5cr6IDdEvWsxDyKpDKB+IAIFbAouQAEB+EqkEGF8n2KhAXQNVhAw7EehUZzIda3o9LAczABmyxiiMcHaB68DngPMxgQgDk7QakYNpPyEfIaREUVuuxKFoPjUCYoeeJcEgCoWQVgCRmAHU5McCA2PRLiqHvSSmEQC4XIDIfXSDFYHkScvxBUgxGznEbkF2Fz8XEhDEsefUjpQ5c6ViAVIMTcKQe5Ei9T83CXQHdRzDAOOTqPIAAAwCvHLqZI8v98gAAAABJRU5ErkJggg=="
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/KodaCryptocurrency"
                >
                  <svg
                    class="sc-eCssSg fQrLiT"
                    color="primary"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      height="22"
                      width="22"
                      xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MTdGMjUxMUFCMTExRUNCRTkxRjkwMEVENUY5MkQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2MTdGMjUyMUFCMTExRUNCRTkxRjkwMEVENUY5MkQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDYxN0YyNEYxQUIxMTFFQ0JFOTFGOTAwRUQ1RjkyRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDYxN0YyNTAxQUIxMTFFQ0JFOTFGOTAwRUQ1RjkyRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OffmHAAAAjklEQVR42mL8//8/Ay0AEy4JRkZGOAYCAyA+D8T/sWDs+nG5GGogA1BeAWqoAC4zSHIxEkjAYyjpQUEpYCFDzwcgToTSVDX4AjD8N8A4uOIIp8FADQ1Qpj2alAKSHAg0kJQq8CUlaqUK6mYQIsEDcnIeGACZjWhSBxgRQJHu6XjU4FGDh4PBjLSqTAECDACOOCiF6MHX4wAAAABJRU5ErkJggg=="
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/CoinKoda"
                >
                  <svg
                    class="sc-eCssSg fQrLiT"
                    color="primary"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      height="22"
                      width="22"
                      xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1QTkzNzY3MUFCMDExRUNCNTk4ODZENDM4QjU2MEYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1QTkzNzY4MUFCMDExRUNCNTk4ODZENDM4QjU2MEYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVBOTM3NjUxQUIwMTFFQ0I1OTg4NkQ0MzhCNTYwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVBOTM3NjYxQUIwMTFFQ0I1OTg4NkQ0MzhCNTYwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5un7JKAAAA60lEQVR42tSVgQ2EIAxFDydgBEdgBEZwBEZwBDcwNwGjOIJswN0E3AZcuUBSDWgVL7lr8qMx5bWWUpj3/vYNY38H/hjA2wO+Hcj6pWkQj1LBJzm78IEAVb5sKVhg8eAsceQNKI+L9mwGTWtwiiwLJfBEMMelyDn0IBF9BiKY42x6wgJLyRZDJXERxabEbUAG1F7UuWa9McNFGXe5dhoroQ7zGvT+BD0qynAvHQBRka1dtFnhELgTYEEZMvzgZioKVMZJRcna5Y4+hukTv643a4rncWy3eWe4jNTZzUodAo+U0YsxZn7manoLMAC8p6UMgmqfQwAAAABJRU5ErkJggg=="
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kodacryptocurrency"
                >
                  <svg
                    class="sc-eCssSg fQrLiT"
                    color="primary"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      height="22"
                      width="22"
                      xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2NzY4NkJBMUFCMTExRUNCMzA1ODQ0MUMwMTA1RDU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2NzY4NkJCMUFCMTExRUNCMzA1ODQ0MUMwMTA1RDU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDY3Njg2QjgxQUIxMTFFQ0IzMDU4NDQxQzAxMDVENTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDY3Njg2QjkxQUIxMTFFQ0IzMDU4NDQxQzAxMDVENTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Q1bKUAAABLklEQVR42rRVgRGDIAyMXgdghI5AN3CDuoF2A0dwE8oITtBu4Ag6ghvQYEMbEbhTz7/7O9TkQwiJAARjjEA2yN5sR0++AjjwhUQO5jishrSaGUXpkVeK80R2yGk2yLI3BIB+BS2t/x1Z0/OIvAGl4FDCRtgAlHHJdBpgZ6p2iPJNWXHlzjzH75LsusSOrMOLqLxjALZ2GhJYxCIgqhKFUnST2jn1/yZmXBJpKq8gmtYVFbqm4j6Y28QFZgTSN7Gz9zIpvG9fvYiwcxwSGQ2hwE4vj/i5O60Tl0J7tgvkcBJiwiMrVAyVZ7s6q3OLFzBQ3nBpiUMsKN/QoQaJdOmqQYRvaC8/2mjWFL9miUw9waPsHkKJDPvDY5OJLsbmkUEvKfXwoD/r1wRn/Uw/AgwAkdQW9nW5S6QAAAAASUVORK5CYII="
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="sc-dlfnbm sc-bTvRPi iaMnCl icOSmS"
            >
              <div
                class="sc-jeGSBP cqDNah"
                role="button"
              >
                <a
                  href="/farms"
                >
                  <svg
                    class="sc-eCssSg cnreMN"
                    color="primary"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      height="24"
                      width="24"
                      xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1RjBFQTY0MUFBQzExRUM5MkYyQTk3RkRGQzI3RDIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1RjBFQTY1MUFBQzExRUM5MkYyQTk3RkRGQzI3RDIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVGMEVBNjIxQUFDMTFFQzkyRjJBOTdGREZDMjdEMjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGMEVBNjMxQUFDMTFFQzkyRjJBOTdGREZDMjdEMjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cQbkyAAACKklEQVR42rTWWUhUURzH8Rk1k3wxoygIAl/UVKIFgqCCCOrFSqGIitQWEHqIFlogiAoLixapCHrTEO2lBam3YKAQpBB8sKjEh8gFUrHFFslu30O/gTOnc+0GM3/4DHfucv53zv2f/514EASxTEZWLMORYz7iva1hx2dgDbZgJeab0/EBL/AQCUz4Lg7Kdv5JEBKbcQorPMcWYin24xUu4E7UKTJJr+CBM/h3DGMI36z9pWhBM/LDEmzFLG3fwiHrnB7UoEKDlaAc29Fpnbcbbcj2JTiBbtzFPu37hYtYpTvswzg+oV/nrtW1yVKs1LT+leAZirHNOnYDx/F1muf0E42ot/adxBI3wUvPxdW4hjkRqvG2mJiJHSllqp/sRh7GMBWx5Bs0jV16bikJ3qhK8jTP5m6uqmqixjtc8i40YlD13IuzeJvWlayHtQnv0zTubFXbVPIhB2kavABn8FTb07aK/wmzSGtxBEXatwijdqswq/Mwnth1/I8wJVmH57hpDR7Tik/pRaYdXMY6HI2YwHTbsuR0OFHkJriOj9rehQMREnzRzTR6jlW4CUwdn3YSHovwUjIt+7z1PaF1tdzXrpvQru247iyhEl6gKcnFPKxHhxZlvtXTNmAZzoVVUa0a3B59Xy3jeheYm5qLQue6R7p2UprDXjg/sFcP/bVT46XquvbgAzioXzkStpJ9Yd4B97ERVViszmoW5We1k3t47Bs4GfFM/235LcAA0LF2fKMcLtwAAAAASUVORK5CYII="
                    />
                  </svg>
                  <div
                    class="sc-iNqMTl wITZZ"
                  >
                    Trade
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div
          class="sc-jQbIHB drRDHk"
        >
          <div
            class="sc-fWSCIC jXkGO"
          >
            <div
              class="sc-dwfUOf gkiFtF"
            />
            <div
              class="sc-laRPJI bxUQdQ"
            >
              <div
                class="sc-dlfnbm sc-hKgILt CdpQa hhgqpc"
              >
                <a
                  href="/"
                >
                  <svg
                    class="sc-eCssSg fQrLiT"
                    color="primary"
                    height="60px"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      width="100%"
                      xlink:href="data:;base64,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"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="sc-dlfnbm sc-hKgILt isWJdv hhgqpc"
              >
                <button
                  class="sc-gsTCUz bFLUht"
                  scale="sm"
                >
                  0xbd...c980
                </button>
              </div>
            </div>
            <div
              style="position: relative; height: 100%;"
            >
              <div
                class="sc-higXBA etpIHR"
              >
                <div
                  class="sc-jeGSBP bovYlQ"
                  role="button"
                >
                  <a
                    href="/farms"
                  >
                    <svg
                      class="sc-eCssSg cnreMN"
                      color="primary"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image
                        height="24"
                        width="24"
                        xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1RjBFQTY0MUFBQzExRUM5MkYyQTk3RkRGQzI3RDIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1RjBFQTY1MUFBQzExRUM5MkYyQTk3RkRGQzI3RDIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVGMEVBNjIxQUFDMTFFQzkyRjJBOTdGREZDMjdEMjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGMEVBNjMxQUFDMTFFQzkyRjJBOTdGREZDMjdEMjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cQbkyAAACKklEQVR42rTWWUhUURzH8Rk1k3wxoygIAl/UVKIFgqCCCOrFSqGIitQWEHqIFlogiAoLixapCHrTEO2lBam3YKAQpBB8sKjEh8gFUrHFFslu30O/gTOnc+0GM3/4DHfucv53zv2f/514EASxTEZWLMORYz7iva1hx2dgDbZgJeab0/EBL/AQCUz4Lg7Kdv5JEBKbcQorPMcWYin24xUu4E7UKTJJr+CBM/h3DGMI36z9pWhBM/LDEmzFLG3fwiHrnB7UoEKDlaAc29Fpnbcbbcj2JTiBbtzFPu37hYtYpTvswzg+oV/nrtW1yVKs1LT+leAZirHNOnYDx/F1muf0E42ot/adxBI3wUvPxdW4hjkRqvG2mJiJHSllqp/sRh7GMBWx5Bs0jV16bikJ3qhK8jTP5m6uqmqixjtc8i40YlD13IuzeJvWlayHtQnv0zTubFXbVPIhB2kavABn8FTb07aK/wmzSGtxBEXatwijdqswq/Mwnth1/I8wJVmH57hpDR7Tik/pRaYdXMY6HI2YwHTbsuR0OFHkJriOj9rehQMREnzRzTR6jlW4CUwdn3YSHovwUjIt+7z1PaF1tdzXrpvQru247iyhEl6gKcnFPKxHhxZlvtXTNmAZzoVVUa0a3B59Xy3jeheYm5qLQue6R7p2UprDXjg/sFcP/bVT46XquvbgAzioXzkStpJ9Yd4B97ERVViszmoW5We1k3t47Bs4GfFM/235LcAA0LF2fKMcLtwAAAAASUVORK5CYII="
                      />
                    </svg>
                    <div
                      class="sc-iNqMTl wITZZ"
                    >
                      Trade
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="sc-clsHhM brqmLy"
              >
                <div
                  class="sc-fbkhIv jpLxtk"
                >
                  <div
                    class="sc-gGmIRh iMzIqc"
                  >
                    <div
                      class="sc-lcujXC dMQYQq"
                    />
                    <div
                      class="sc-dlfnbm isWJdv"
                    >
                      $0.00091815
                    </div>
                  </div>
                </div>
                <div
                  class="sc-GqfZa bIfwSN"
                >
                  <a
                    href="https://discord.com/invite/FBgEmJmHuc"
                  >
                    <svg
                      class="sc-eCssSg fQrLiT"
                      color="primary"
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image
                        height="22"
                        width="22"
                        xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwOTlFQkRFMUFCMDExRUNCMjU1Q0ZDRTA4NzVFMTMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwOTlFQkRGMUFCMDExRUNCMjU1Q0ZDRTA4NzVFMTMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjA5OUVCREMxQUIwMTFFQ0IyNTVDRkNFMDg3NUUxMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjA5OUVCREQxQUIwMTFFQ0IyNTVDRkNFMDg3NUUxMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bVx7+AAABD0lEQVR42tSVgRHCIAwApecAOIF0AhmBDXQDO0o3qU5QN2hHcAPcoG4QE42VVkBPqXfmLtc7kjwpCUEAwGwKyWa/FPwLhVrBTbTHrtlGPupdaAkPaSLgxvErX0GrEZTUwrNYx36XKgQt4HspfGCbAGwHXYELG/yoBHVXzOrbbZ2wqa4swRl3+JGJwGchxCLjdpIJM5bEpKMwAYcWdxahaLa1AbMh8GqCy7ucR7rBQGRCQXx6aZG4cH0BMw/09AFoHCN9Y/OAmqPuaOdYVuyTc8ywuDRIPJ1B1d5zgOY6KCc70iMq3bKtNx7B1Hd14O7XkeKFYmhCStfR8GLHDl1siPNj4PpSrHGP4r/evIsAAwAEVK6XOKORxAAAAABJRU5ErkJggg=="
                      />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/kodakingofdogaltschat"
                  >
                    <svg
                      class="sc-eCssSg fQrLiT"
                      color="primary"
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image
                        height="22"
                        width="22"
                        xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1NzY4QkM1MUFCMDExRUNCQ0RCRTU5MjkwMkRFNTJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1NzY4QkM2MUFCMDExRUNCQ0RCRTU5MjkwMkRFNTJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDU3NjhCQzMxQUIwMTFFQ0JDREJFNTkyOTAyREU1MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDU3NjhCQzQxQUIwMTFFQ0JDREJFNTkyOTAyREU1MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5EvOKlAAAA60lEQVR42mL8//8/Ay0AE8NgB0CfBwDx/P8Q8J5SwxSAuB+I7/9HA+QYJgDECUB8/j9u8J5cr6IDdEvWsxDyKpDKB+IAIFbAouQAEB+EqkEGF8n2KhAXQNVhAw7EehUZzIda3o9LAczABmyxiiMcHaB68DngPMxgQgDk7QakYNpPyEfIaREUVuuxKFoPjUCYoeeJcEgCoWQVgCRmAHU5McCA2PRLiqHvSSmEQC4XIDIfXSDFYHkScvxBUgxGznEbkF2Fz8XEhDEsefUjpQ5c6ViAVIMTcKQe5Ei9T83CXQHdRzDAOOTqPIAAAwCvHLqZI8v98gAAAABJRU5ErkJggg=="
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/KodaCryptocurrency"
                  >
                    <svg
                      class="sc-eCssSg fQrLiT"
                      color="primary"
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image
                        height="22"
                        width="22"
                        xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MTdGMjUxMUFCMTExRUNCRTkxRjkwMEVENUY5MkQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2MTdGMjUyMUFCMTExRUNCRTkxRjkwMEVENUY5MkQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDYxN0YyNEYxQUIxMTFFQ0JFOTFGOTAwRUQ1RjkyRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDYxN0YyNTAxQUIxMTFFQ0JFOTFGOTAwRUQ1RjkyRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OffmHAAAAjklEQVR42mL8//8/Ay0AEy4JRkZGOAYCAyA+D8T/sWDs+nG5GGogA1BeAWqoAC4zSHIxEkjAYyjpQUEpYCFDzwcgToTSVDX4AjD8N8A4uOIIp8FADQ1Qpj2alAKSHAg0kJQq8CUlaqUK6mYQIsEDcnIeGACZjWhSBxgRQJHu6XjU4FGDh4PBjLSqTAECDACOOCiF6MHX4wAAAABJRU5ErkJggg=="
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/CoinKoda"
                  >
                    <svg
                      class="sc-eCssSg fQrLiT"
                      color="primary"
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image
                        height="22"
                        width="22"
                        xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1QTkzNzY3MUFCMDExRUNCNTk4ODZENDM4QjU2MEYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1QTkzNzY4MUFCMDExRUNCNTk4ODZENDM4QjU2MEYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVBOTM3NjUxQUIwMTFFQ0I1OTg4NkQ0MzhCNTYwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVBOTM3NjYxQUIwMTFFQ0I1OTg4NkQ0MzhCNTYwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5un7JKAAAA60lEQVR42tSVgQ2EIAxFDydgBEdgBEZwBEZwBDcwNwGjOIJswN0E3AZcuUBSDWgVL7lr8qMx5bWWUpj3/vYNY38H/hjA2wO+Hcj6pWkQj1LBJzm78IEAVb5sKVhg8eAsceQNKI+L9mwGTWtwiiwLJfBEMMelyDn0IBF9BiKY42x6wgJLyRZDJXERxabEbUAG1F7UuWa9McNFGXe5dhoroQ7zGvT+BD0qynAvHQBRka1dtFnhELgTYEEZMvzgZioKVMZJRcna5Y4+hukTv643a4rncWy3eWe4jNTZzUodAo+U0YsxZn7manoLMAC8p6UMgmqfQwAAAABJRU5ErkJggg=="
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/kodacryptocurrency"
                  >
                    <svg
                      class="sc-eCssSg fQrLiT"
                      color="primary"
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image
                        height="22"
                        width="22"
                        xlink:href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2NzY4NkJBMUFCMTExRUNCMzA1ODQ0MUMwMTA1RDU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2NzY4NkJCMUFCMTExRUNCMzA1ODQ0MUMwMTA1RDU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDY3Njg2QjgxQUIxMTFFQ0IzMDU4NDQxQzAxMDVENTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDY3Njg2QjkxQUIxMTFFQ0IzMDU4NDQxQzAxMDVENTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Q1bKUAAABLklEQVR42rRVgRGDIAyMXgdghI5AN3CDuoF2A0dwE8oITtBu4Ag6ghvQYEMbEbhTz7/7O9TkQwiJAARjjEA2yN5sR0++AjjwhUQO5jishrSaGUXpkVeK80R2yGk2yLI3BIB+BS2t/x1Z0/OIvAGl4FDCRtgAlHHJdBpgZ6p2iPJNWXHlzjzH75LsusSOrMOLqLxjALZ2GhJYxCIgqhKFUnST2jn1/yZmXBJpKq8gmtYVFbqm4j6Y28QFZgTSN7Gz9zIpvG9fvYiwcxwSGQ2hwE4vj/i5O60Tl0J7tgvkcBJiwiMrVAyVZ7s6q3OLFzBQ3nBpiUMsKN/QoQaJdOmqQYRvaC8/2mjWFL9miUw9waPsHkKJDPvDY5OJLsbmkUEvKfXwoD/r1wRn/Uw/AgwAkdQW9nW5S6QAAAAASUVORK5CYII="
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="sc-fvhGYg hPsUiQ"
          >
            body
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});
