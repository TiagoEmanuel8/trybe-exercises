import React from 'react'

export default class Email extends React.Component {
  render () {
    // 1 - Recebendo como props
    const { value, handleChange } = this.props;
    return(
      <label>
        Email
        <input 
          name="email"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}