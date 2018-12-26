import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeed } from './actions';


class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.actions.getFeed('adnxy');
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    console.log('propovi', this.props);
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
const mapStateToProps = state => {
  console.log('stejt', state.feed.results);
  return {
    feed: state.feed.results
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
    getFeed
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
