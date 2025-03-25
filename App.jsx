import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then((res) => {setUsers(res.data.data);})
  }, [])

  useEffect(() => {
    console.log("Data user :", users)
  }, [users])

  return (
    <ScrollView style={styles.list} contentContainerStyle={{paddingBottom: 30}}>
      <Text style={styles.title}>User List</Text>  
      {users.map((item) => (
        <UserCard key={item.id} item={item}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list :{
    padding: 20,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  title :{
    fontWeight : "bold",
    fontSize: 20,
  },
});

export default App;
