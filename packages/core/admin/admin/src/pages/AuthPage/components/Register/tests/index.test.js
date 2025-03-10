import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@strapi/design-system/ThemeProvider';
import { lightTheme } from '@strapi/design-system/themes';
import { Router } from 'react-router-dom';
import { TrackingProvider } from '@strapi/helper-plugin';
import { createMemoryHistory } from 'history';
import * as yup from 'yup';
import { IntlProvider } from 'react-intl';
import Register from '..';

jest.mock('../../../../../components/LocalesProvider/useLocalesProvider', () => () => ({
  changeLocale() {},
  localeNames: { en: 'English' },
  messages: ['test'],
}));
jest.mock('../../../../../hooks/useConfigurations', () => () => ({
  logos: {
    auth: { custom: 'customAuthLogo.png', default: 'defaultAuthLogo.png' },
  },
}));
jest.mock('@strapi/helper-plugin', () => ({
  ...jest.requireActual('@strapi/helper-plugin'),
  useNotification: () => jest.fn({}),
}));

describe('ADMIN | PAGES | AUTH | Register', () => {
  it('should render and match the snapshot', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <IntlProvider locale="en" messages={{}} textComponent="span">
        <TrackingProvider>
          <ThemeProvider theme={lightTheme}>
            <Router history={history}>
              <Register
                authType="register-admin"
                fieldsToDisable={[]}
                noSignin
                onSubmit={() => {}}
                schema={yup.object()}
              />
            </Router>
          </ThemeProvider>
        </TrackingProvider>
      </IntlProvider>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c2 {
        padding-top: 24px;
        padding-right: 40px;
      }

      .c7 {
        padding-left: 8px;
      }

      .c9 {
        padding-top: 8px;
        padding-bottom: 64px;
      }

      .c10 {
        background: #ffffff;
        padding-top: 48px;
        padding-right: 56px;
        padding-bottom: 48px;
        padding-left: 56px;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c16 {
        padding-top: 24px;
        padding-bottom: 4px;
      }

      .c18 {
        padding-bottom: 32px;
      }

      .c34 {
        padding-right: 12px;
        padding-left: 8px;
      }

      .c1 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }

      .c13 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .c21 {
        -webkit-align-items: stretch;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c29 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c6 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        line-height: 1.14;
        color: #32324d;
      }

      .c17 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c20 {
        font-size: 1rem;
        line-height: 1.5;
        color: #666687;
      }

      .c26 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        color: #32324d;
      }

      .c27 {
        font-size: 0.875rem;
        line-height: 1.43;
        color: #d02b20;
      }

      .c37 {
        font-size: 0.75rem;
        line-height: 1.33;
        color: #666687;
      }

      .c38 {
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c43 {
        font-size: 0.875rem;
        line-height: 1.43;
        font-weight: 600;
        line-height: 1.14;
        color: #32324d;
      }

      .c22 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c22 > * + * {
        margin-top: 24px;
      }

      .c25 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c25 > * + * {
        margin-top: 4px;
      }

      .c3 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c3 svg {
        height: 12px;
        width: 12px;
      }

      .c3 svg > g,
      .c3 svg path {
        fill: #ffffff;
      }

      .c3[aria-disabled='true'] {
        pointer-events: none;
      }

      .c3:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c3:focus-visible {
        outline: none;
      }

      .c3:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c4 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #4945ff;
        border: 1px solid #4945ff;
        height: 2rem;
        padding-left: 16px;
        padding-right: 16px;
        border: 1px solid transparent;
        background: transparent;
      }

      .c4 .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c4 .c5 {
        color: #ffffff;
      }

      .c4[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c4[aria-disabled='true'] .c5 {
        color: #666687;
      }

      .c4[aria-disabled='true'] svg > g,.c4[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c4[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c4[aria-disabled='true']:active .c5 {
        color: #666687;
      }

      .c4[aria-disabled='true']:active svg > g,.c4[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c4:hover {
        background-color: #f6f6f9;
      }

      .c4:active {
        border: 1px solid undefined;
        background: undefined;
      }

      .c4 .c5 {
        color: #32324d;
      }

      .c4 svg > g,
      .c4 svg path {
        fill: #8e8ea9;
      }

      .c42 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #4945ff;
        border: 1px solid #4945ff;
        height: 2.5rem;
        padding-left: 16px;
        padding-right: 16px;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
      }

      .c42 .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c42 .c5 {
        color: #ffffff;
      }

      .c42[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c42[aria-disabled='true'] .c5 {
        color: #666687;
      }

      .c42[aria-disabled='true'] svg > g,.c42[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c42[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c42[aria-disabled='true']:active .c5 {
        color: #666687;
      }

      .c42[aria-disabled='true']:active svg > g,.c42[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c42:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c42:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c42 svg > g,
      .c42 svg path {
        fill: #ffffff;
      }

      .c40 {
        margin: 0;
        height: 18px;
        min-width: 18px;
        border-radius: 4px;
        border: 1px solid #c0c0cf;
        -webkit-appearance: none;
        background-color: #ffffff;
        cursor: pointer;
      }

      .c40:checked {
        background-color: #4945ff;
        border: 1px solid #4945ff;
      }

      .c40:checked:after {
        content: '';
        display: block;
        position: relative;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=) no-repeat no-repeat center center;
        width: 10px;
        height: 10px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      .c40:checked:disabled:after {
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==) no-repeat no-repeat center center;
      }

      .c40:disabled {
        background-color: #dcdce4;
        border: 1px solid #c0c0cf;
      }

      .c40:indeterminate {
        background-color: #4945ff;
        border: 1px solid #4945ff;
      }

      .c40:indeterminate:after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: #ffffff;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      .c40:indeterminate:disabled {
        background-color: #dcdce4;
        border: 1px solid #c0c0cf;
      }

      .c40:indeterminate:disabled:after {
        background-color: #8e8ea9;
      }

      .c28 {
        line-height: 0;
      }

      .c31 {
        border: none;
        border-radius: 4px;
        padding-bottom: 0.65625rem;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 0.65625rem;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
        background: inherit;
      }

      .c31::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c31::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c31:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c31::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c31[aria-disabled='true'] {
        color: inherit;
      }

      .c31:focus {
        outline: none;
        box-shadow: none;
      }

      .c32 {
        border: none;
        border-radius: 4px;
        padding-bottom: 0.65625rem;
        padding-left: 16px;
        padding-right: 0;
        padding-top: 0.65625rem;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
        background: inherit;
      }

      .c32::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c32::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c32:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c32::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c32[aria-disabled='true'] {
        color: inherit;
      }

      .c32:focus {
        outline: none;
        box-shadow: none;
      }

      .c30 {
        border: 1px solid #dcdce4;
        border-radius: 4px;
        background: #ffffff;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c30:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c35 {
        border: none;
        background: transparent;
        font-size: 1.6rem;
        width: auto;
        padding: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c39 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
      }

      .c39 * {
        cursor: pointer;
      }

      .c8 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c8 svg {
        height: 4px;
        width: 6px;
      }

      .c12:focus-visible {
        outline: none;
      }

      .c23 {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 16px;
      }

      .c24 {
        grid-column: span 6;
        max-width: 100%;
      }

      .c11 {
        margin: 0 auto;
        width: 552px;
      }

      .c14 {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c15 {
        height: 4.5rem;
      }

      .c36 svg {
        height: 1rem;
        width: 1rem;
      }

      .c36 svg path {
        fill: #666687;
      }

      .c19 {
        text-align: center;
      }

      .c41 {
        color: #4945ff;
      }

      .c33::-ms-reveal {
        display: none;
      }

      @media (max-width:68.75rem) {
        .c24 {
          grid-column: span;
        }
      }

      @media (max-width:34.375rem) {
        .c24 {
          grid-column: span;
        }
      }

      <div>
        <header
          class="c0 c1"
        >
          <div
            class="c0 c2"
          >
            <div>
              <button
                aria-controls="simplemenu-1"
                aria-disabled="false"
                aria-expanded="false"
                aria-haspopup="true"
                class="c3 c4"
                label="English"
                type="button"
              >
                <span
                  class="c5 c6"
                >
                  English
                </span>
                <div
                  aria-hidden="true"
                  class="c0 c7"
                >
                  <span
                    class="c8"
                  >
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="1em"
                      viewBox="0 0 14 8"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M14 .889a.86.86 0 01-.26.625L7.615 7.736A.834.834 0 017 8a.834.834 0 01-.615-.264L.26 1.514A.861.861 0 010 .889c0-.24.087-.45.26-.625A.834.834 0 01.875 0h12.25c.237 0 .442.088.615.264a.86.86 0 01.26.625z"
                        fill="#32324D"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </header>
        <div
          class="c0 c9"
        >
          <div
            class="c0 c10 c11"
          >
            <form
              action="#"
              novalidate=""
            >
              <main
                aria-labelledby="main-content-title"
                class="c12"
                id="main-content"
                tabindex="-1"
              >
                <div
                  class="c0 c13 c14"
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    class="c15"
                    src="defaultAuthLogo.png"
                  />
                  <div
                    class="c0 c16"
                  >
                    <h1
                      class="c5 c17"
                    >
                      Welcome to Strapi!
                    </h1>
                  </div>
                  <div
                    class="c0 c18 c19"
                  >
                    <span
                      class="c5 c20"
                    >
                      Credentials are only used to authenticate in Strapi. All saved data will be stored in your database.
                    </span>
                  </div>
                </div>
                <div
                  class="c0 c21 c22"
                  spacing="6"
                >
                  <div
                    class="c0 c23"
                  >
                    <div
                      class="c24"
                    >
                      <div
                        class="c0 "
                      >
                        <div>
                          <div>
                            <div
                              class="c0 c21 c25"
                              spacing="1"
                            >
                              <label
                                class="c5 c26"
                                for="textinput-2"
                                required=""
                              >
                                <div
                                  class="c0 c13"
                                >
                                  Firstname
                                  <span
                                    class="c5 c27 c28"
                                  >
                                    *
                                  </span>
                                </div>
                              </label>
                              <div
                                class="c0 c29 c30"
                              >
                                <input
                                  aria-disabled="false"
                                  aria-invalid="false"
                                  class="c31"
                                  id="textinput-2"
                                  name="firstname"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="c24"
                    >
                      <div
                        class="c0 "
                      >
                        <div>
                          <div>
                            <div
                              class="c0 c21 c25"
                              spacing="1"
                            >
                              <label
                                class="c5 c26"
                                for="textinput-3"
                              >
                                <div
                                  class="c0 c13"
                                >
                                  Lastname
                                </div>
                              </label>
                              <div
                                class="c0 c29 c30"
                              >
                                <input
                                  aria-disabled="false"
                                  aria-invalid="false"
                                  class="c31"
                                  id="textinput-3"
                                  name="lastname"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="c0 c21 c25"
                        spacing="1"
                      >
                        <label
                          class="c5 c26"
                          for="textinput-4"
                          required=""
                        >
                          <div
                            class="c0 c13"
                          >
                            Email
                            <span
                              class="c5 c27 c28"
                            >
                              *
                            </span>
                          </div>
                        </label>
                        <div
                          class="c0 c29 c30"
                        >
                          <input
                            aria-disabled="false"
                            aria-invalid="false"
                            class="c31"
                            id="textinput-4"
                            name="email"
                            type="email"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="c0 c21 c25"
                        spacing="1"
                      >
                        <label
                          class="c5 c26"
                          for="textinput-5"
                          required=""
                        >
                          <div
                            class="c0 c13"
                          >
                            Password
                            <span
                              class="c5 c27 c28"
                            >
                              *
                            </span>
                          </div>
                        </label>
                        <div
                          class="c0 c29 c30"
                        >
                          <input
                            aria-describedby="textinput-5-hint"
                            aria-disabled="false"
                            aria-invalid="false"
                            class="c32 c33"
                            id="textinput-5"
                            name="password"
                            type="password"
                            value=""
                          />
                          <div
                            class="c0 c34"
                          >
                            <button
                              aria-label="Hide password"
                              class="c35 c36"
                              type="button"
                            >
                              <svg
                                fill="none"
                                height="1em"
                                viewBox="0 0 24 24"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.048 6.875L2.103 4.93a1 1 0 111.414-1.415l16.966 16.966a1 1 0 11-1.414 1.415l-2.686-2.686a12.247 12.247 0 01-4.383.788c-3.573 0-6.559-1.425-8.962-3.783a15.842 15.842 0 01-2.116-2.568 11.096 11.096 0 01-.711-1.211 1.145 1.145 0 010-.875c.124-.258.36-.68.711-1.211.58-.876 1.283-1.75 2.116-2.569.326-.32.663-.622 1.01-.906zm10.539 10.539l-1.551-1.551a4.005 4.005 0 01-4.9-4.9L6.584 9.411a6 6 0 008.002 8.002zM7.617 4.787A12.248 12.248 0 0112 3.998c3.572 0 6.559 1.426 8.961 3.783a15.845 15.845 0 012.117 2.569c.351.532.587.954.711 1.211.116.242.115.636 0 .875-.124.257-.36.68-.711 1.211-.58.876-1.283 1.75-2.117 2.568-.325.32-.662.623-1.01.907l-2.536-2.537a6 6 0 00-8.002-8.002L7.617 4.787zm3.347 3.347A4.005 4.005 0 0116 11.998c0 .359-.047.706-.136 1.037l-4.9-4.901z"
                                  fill="#212134"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p
                          class="c5 c37"
                          id="textinput-5-hint"
                        >
                          Must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="c0 c21 c25"
                        spacing="1"
                      >
                        <label
                          class="c5 c26"
                          for="textinput-6"
                          required=""
                        >
                          <div
                            class="c0 c13"
                          >
                            Confirm Password
                            <span
                              class="c5 c27 c28"
                            >
                              *
                            </span>
                          </div>
                        </label>
                        <div
                          class="c0 c29 c30"
                        >
                          <input
                            aria-disabled="false"
                            aria-invalid="false"
                            class="c32 c33"
                            id="textinput-6"
                            name="confirmPassword"
                            type="password"
                            value=""
                          />
                          <div
                            class="c0 c34"
                          >
                            <button
                              aria-label="Hide password"
                              class="c35 c36"
                              type="button"
                            >
                              <svg
                                fill="none"
                                height="1em"
                                viewBox="0 0 24 24"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.048 6.875L2.103 4.93a1 1 0 111.414-1.415l16.966 16.966a1 1 0 11-1.414 1.415l-2.686-2.686a12.247 12.247 0 01-4.383.788c-3.573 0-6.559-1.425-8.962-3.783a15.842 15.842 0 01-2.116-2.568 11.096 11.096 0 01-.711-1.211 1.145 1.145 0 010-.875c.124-.258.36-.68.711-1.211.58-.876 1.283-1.75 2.116-2.569.326-.32.663-.622 1.01-.906zm10.539 10.539l-1.551-1.551a4.005 4.005 0 01-4.9-4.9L6.584 9.411a6 6 0 008.002 8.002zM7.617 4.787A12.248 12.248 0 0112 3.998c3.572 0 6.559 1.426 8.961 3.783a15.845 15.845 0 012.117 2.569c.351.532.587.954.711 1.211.116.242.115.636 0 .875-.124.257-.36.68-.711 1.211-.58.876-1.283 1.75-2.117 2.568-.325.32-.662.623-1.01.907l-2.536-2.537a6 6 0 00-8.002-8.002L7.617 4.787zm3.347 3.347A4.005 4.005 0 0116 11.998c0 .359-.047.706-.136 1.037l-4.9-4.901z"
                                  fill="#212134"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="c0 c21 c25"
                      spacing="1"
                    >
                      <label
                        class="c5 c38 c39"
                      >
                        <div
                          class="c0 "
                        >
                          <input
                            aria-label="news"
                            class="c40"
                            id="checkbox-7"
                            name="news"
                            type="checkbox"
                          />
                        </div>
                        <div
                          class="c0 c7"
                        >
                          Keep me updated about new features & upcoming improvements (by doing this you accept the 
                          <a
                            class="c41"
                            href="https://strapi.io/terms"
                            rel="noreferrer"
                            target="_blank"
                          >
                            terms
                          </a>
                           and the 
                          <a
                            class="c41"
                            href="https://strapi.io/privacy"
                            rel="noreferrer"
                            target="_blank"
                          >
                            policy
                          </a>
                          ).
                        </div>
                      </label>
                    </div>
                  </div>
                  <button
                    aria-disabled="false"
                    class="c3 c42"
                    type="submit"
                  >
                    <span
                      class="c5 c43"
                    >
                      Let's start
                    </span>
                  </button>
                </div>
              </main>
            </form>
          </div>
        </div>
      </div>
    `);
  });
});
