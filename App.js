import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

class MultiSelect extends React.Component{
    constructor() {
        super();
        this.state = {
            rooms: [{id: 1, name: 'informações do IFAL'}, {id: 2, name: 'Instagram da equipe'}],
            selectedItems: [],
            bedroomSelect: [],
            newSelectItems: []
        };
    }

    onSelectedItemsChange = (selectedItems) => {
        console.log("selected", selectedItems)
        const name = selectedItems.toString()

        const x = []

        const a = []
        console.log(typeof (name))
        if(name == "informações do IFAL"){
            console.log("true", name)
            a.push( {
                name: 'Instagram',
                id: 1,
            },
            {
                name: 'Facebook',
                id: 2,
            },
            {
                name: 'Eventos',
                id: 3,
            },
            {
                name: 'YouTube',
                id: 4,
            },
            {
                name: 'Twitter',
                id: 5,
            },
            )
        }else{
            console.log("false", name)
            a.push( {
                name: '@vann_rochaa5',
                id: 1,
            },
            {
                name: '@jpedroguruba',
                id: 2,
            },
            {
                name: '@lucass.emanuell__',
                id: 3,
            },
            {
                name: '@ocaio_henrique_',
                id: 3,
            })
        }

      this.setState(() => ({
          selectedItems: selectedItems,
          bedroomSelect: a
      }));
    };

    onSelectedNewChange = (newSelectItems) => {
        this.setState(() => ({
            newSelectItems: newSelectItems,
        }))
    }

    render(){
        console.log("@@@@@", this.state.selectedItems)
        console.log("$####$", this.state.bedroomSelect)
        return(
            <View style={styles.container}>
                <SectionedMultiSelect
                    items={this.state.rooms}
                    single={true}
                    uniqueKey="name"
                    selectText="Choose some things..."
                    showDropDowns={true}
                    readOnlyHeadings={false}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                    showChips={false}
                  />
                <SectionedMultiSelect
                    items={this.state.bedroomSelect}
                    uniqueKey="name"
                    selectText="Choose some things..."
                    showDropDowns={true}
                    readOnlyHeadings={false}
                    onSelectedItemsChange={this.onSelectedNewChange}
                    selectedItems={this.state.newSelectItems}
                    showChips={false}
                  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,

    }
})

export default MultiSelect