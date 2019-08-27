import React from 'react';
import { connect } from 'react-redux';
import * as Table from 'reactabular-table';
import MSSorter from 'components/Ui/MSSorter/MSSorter';
import {
  initSample, sortSample, resetSample, setSorting,
} from 'redux/actions/SampleAction';
import {
  countries, setSort, setSortGroup, keyMap,
} from 'components/Ui/MyTable/MyTable.utils';
import { proptypes, defaultprops } from 'components/Ui/MyTable/MyTable.props';

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ctrlKeyDown: false,
    };
  }

  componentWillMount() {
    // call init if we can
    this.props.init();
    keyMap(
      'ctrlKey',
      (keydown) => {
        this.setState({
          ctrlKeyDown: keydown,
        });
      },
    ).init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.sorting !== prevProps.sorting) {
      // console.log(`sorting...${JSON.stringify(this.props.sorting)}`);
      this.props.sort(this.props.rows, this.props.sorting);
    }
  }

  componentWillUnmount() {
    // call clear
    keyMap('ctrlKey').clear();
  }

  render() {
    const headerformat = (label) => {
      const sortObj = this.props.sorting ? (this.props.sorting).find((e) => e.name === label) : {};
      const status = sortObj ? sortObj.status : null;
      return (
        <div>
          {label}
          <MSSorter sort={status} />
        </div>
      );
    };
    const columns = [
      {
        property: 'id',
        header: {
          label: 'ID',
          formatters: [
            headerformat,
          ],
          transforms: [
            (label) => ({
              onClick: () => this.props.updateSort(label, this.props.sorting, this.state.ctrlKeyDown),
            }),
          ],
        },
      },
      {
        property: 'name',
        header: {
          label: 'Name',
          transforms: [
            (label) => ({
              onClick: () => this.props.updateSort(label, this.props.sorting, this.state.ctrlKeyDown),
            }),
          ],
          formatters: [
            headerformat,
          ],
        },
      },
      {
        property: 'tools',
        header: {
          label: 'Active',
          name: 'tools',
          transforms: [
            (name) => ({
              onClick: () => this.props.updateSort(name, this.props.sorting, this.state.ctrlKeyDown),
            }),
          ],
          formatters: [
            headerformat,
          ],
        },
        cell: {
          formatters: [
            (tools) => (tools.hammer ? 'Hammertime' : 'nope'),
          ],
        },
      },
      {
        property: 'country',
        header: {
          label: 'Country',
          transforms: [
            (label) => ({
              onClick: () => this.props.updateSort(label, this.props.sorting, this.state.ctrlKeyDown),
            }),
          ],
          formatters: [
            headerformat,
          ],
        },
        cell: {
          formatters: [
            (country) => countries[country],
          ],
        },
      },
    ];
    return this.props.rows ? (
      <Table.Provider
        className="table table-striped table-bordered"
        columns={columns}
      >
        <Table.Header />
        <Table.Body rows={this.props.rows} rowKey="id" />
      </Table.Provider>
    ) : null;
  }
}

MyTable.propTypes = proptypes;
MyTable.defaultProps = defaultprops;

const mapDispatchToProps = (dispatch) => ({
  // initSample(values) {
  //   console.log('MyTable.js: ?.initSample called => ', 'values=', values);
  //   return postJSON(getRoutePath('api/test'), {
  //     ...values,
  //   }).then((resp) => ((resp && resp.response) ? resp.response : null), (err) => err || null);
  // },
  init() {
    return dispatch(initSample());
  },
  sort(rows, sorting) {
    return dispatch(sortSample(rows, sorting));
  },
  reset() {
    return dispatch(resetSample());
  },
  updateSort(e, sorting, multiCol) {
    const updatedSorting = multiCol ? setSortGroup(e, sorting) : setSort(e, sorting);
    return dispatch(setSorting(updatedSorting));
  },
});

const mapStateToProps = (storeState) => ({
  rows: storeState.sample.rows,
  sorting: storeState.sample.sorting,
});

export default connect(
  // store state to props
  mapStateToProps,
  mapDispatchToProps,
)(MyTable);
