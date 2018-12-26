import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeed } from './actions';
import styles from '../../styles/feed-styles';

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.actions.getFeed('adnxy');
  }

  //Need to create seperate component to handle each list item rendering
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    const { feed } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={feed}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
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
