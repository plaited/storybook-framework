import { Component, PlaitProps, css } from 'plaited'
import { Button } from './button.js'

const [cls, stylesheet] = css`
  .storybook-header {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .storybook-header svg {
    display: inline-block;
    vertical-align: top;
  }

  .storybook-header h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
  }

  .storybook-header button + button {
    margin-left: 10px;
  }

  .storybook-header .welcome {
    color: #333;
    font-size: 14px;
    margin-right: 10px;
  }
`

export class Header extends Component({
  tag: 'header-el',
  // dev: true,
  observedTriggers: { user: 'user' },
  template: (
    <header {...stylesheet}>
      <div className={cls['storybook-header']}>
        <div>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              fill='none'
              fillRule='evenodd'
            >
              <path
                d='M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z'
                fill='#FFF'
              />
              <path
                d='M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z'
                fill='#555AB9'
              />
              <path
                d='M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z'
                fill='#91BAF8'
              />
            </g>
          </svg>
          <h1>Acme</h1>
        </div>
        <div
          dataTarget='button-bar'
          dataTrigger={{ click: 'click' }}
        >
          <Button
            size='small'
            value='onLogin'
            label='Log in'
          />
          <Button
            primary
            size='small'
            value='onCreateAccount'
            label='Sign up'
          />
        </div>
      </div>
    </header>
  ),
}) {
  static observedAttributes = ['user']
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (name === 'user') {
      const bar = this.$('button-bar')
      newValue
        ? bar.render(
            <>
              <span className={cls['welcome']}>
                Welcome, <b>{newValue}</b>!
              </span>
              <Button
                size='small'
                value='onLogout'
                label='Log out'
              />
            </>,
          )
        : bar.render(
            <>
              <Button
                size='small'
                value='onLogin'
                label='Log in'
              />
              <Button
                primary
                size='small'
                value='onCreateAccount'
                label='Sign up'
              />
            </>,
          )
    }
  }
  plait({ feedback, host }: PlaitProps): void | Promise<void> {
    feedback({
      click(e: Event) {
        const value = (e.target as HTMLButtonElement)?.value
        host.dispatchEvent(new CustomEvent(value, { bubbles: true }))
      },
    })
  }
}
