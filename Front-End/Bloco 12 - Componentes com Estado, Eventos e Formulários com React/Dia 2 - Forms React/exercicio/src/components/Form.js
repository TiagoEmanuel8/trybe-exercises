import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value.toUpperCase(),
    });
  };

  handleSubmit() {
    const { name } = this.state;
    console.log(name);
    // this.state(name);
  };

  render() {
    const { name } = this.state;
    return(
      <section>
      <form>
        <fieldset>
          <label>
            Nome
            <input
              name="name"
              value={ name }
              type='text'
              maxlength='40'
              required='required'
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            submit
          </button>
        </fieldset>
      </form>
      <div>
        { name }
      </div>
      </section>
    );
  };
};

export default Form;
