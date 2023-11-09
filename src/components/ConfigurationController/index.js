// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="configuration-controls-container">
            <h1 className="configuration-controller-heading">Layout</h1>
            <div className="inputs-container">
              <div className="input-container">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeShowContent}
                />
                <label htmlFor="content" className="label">
                  Content
                </label>
              </div>
              <div className="input-container">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  checked={showLeftNavbar}
                  onChange={onChangeShowLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label">
                  Left Navbar
                </label>
              </div>
              <div className="input-container">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  checked={showRightNavbar}
                  onChange={onChangeShowRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
