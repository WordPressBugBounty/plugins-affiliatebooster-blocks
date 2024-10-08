const { __ } = wp.i18n
const { Component } = wp.element;
const { Tooltip, Dropdown } = wp.components;
import Range from '../Range'


class InlineSpacer extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			device: 'md'
		}
	}
	setSettings(type, val) {
		this.props.onChange(Object.assign({}, this.props.value || { spaceTop: 0, spaceBottom: 0 }, { [type]: val }))
	}
	render() {
		const { value, responsive } = this.props;
		const { device } = this.state
		return (
			<Dropdown
				className="affiliate-toolber-field"
				popoverProps={ { placement: 'top-right' } }
				renderToggle={({ isOpen, onToggle }) => (
					<Tooltip text={__('Speacer')}>
						<button onClick={onToggle} aria-expanded={isOpen}>
							<i className="fas fa-arrows-alt-v" />
						</button>
					</Tooltip>
				)}
				renderContent={() =>
					<div className="affiliate-toolber-popup affiliate-inline-spacer">
						<div className="affiliate-inline-spacer-inner">
							<Range label={__('Top')} value={value.spaceTop} onChange={val => this.setSettings('spaceTop', val)} min={0} max={100} step={1} unit={['px', 'em', '%']} beforeIcon="arrow-up" allowReset responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
							<Range label={__('Bottom')} value={value.spaceBottom} onChange={val => this.setSettings('spaceBottom', val)} min={0} max={100} step={1} unit={['px', 'em', '%']} beforeIcon="arrow-down" allowReset responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
						</div>
					</div>
				}
			>
			</Dropdown>
		)
	}
}

export default InlineSpacer

