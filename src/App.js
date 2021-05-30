import React, { Component } from "react";
import Form from './component/CousreForm/Form';
import List from './component/CourseList/List';

class App extends Component {

  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JQuery' },
    ],
    current: ''
  }

  // Update Course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // Add Course
  addCourse = (e) => {
    e.preventDefault();
    if (e.target.name.value === '') {
      return false
    } else {
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({ name: current });
      this.setState({ courses, current: '' })
    }
  }

  // Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses })
  }

  // Edit Course
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({ courses })
  }

  render() {
    const { courses } = this.state;
    let length = courses.length
    const cousreList = length ? (courses.map((course, index) => {
      return <List details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })) : (<p>there is no item to show</p>)

    return (
      <section className="app">
        <h2>Add Course</h2>
        <Form updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        <ul>{cousreList}</ul>
      </section>
    )
  }
}

export default App;