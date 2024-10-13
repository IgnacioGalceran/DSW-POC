import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Especialidades } from "../../mock/data";
import { Link } from "expo-router";
import { addEspecialidad, deleteField } from "../../functions/functions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/especialidades";

export default function Index() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [nombre, setNombre] = useState("");
  const [especialidades, setEspecialidades] = useState(Especialidades);

  const handleDelete = (id: number) => {
    let especialidadesUpdated = deleteField(especialidades, id);
    console.log(especialidadesUpdated);
    setEspecialidades(especialidadesUpdated);
  };

  const handleSubmit = () => {
    if (nombre.trim()) {
      const nuevaEspecialidad = {
        id: especialidades.length + 1,
        nombre: nombre,
      };
      const updatedEspecialidades = addEspecialidad(
        especialidades,
        nuevaEspecialidad
      );
      console.log(updatedEspecialidades);
      setEspecialidades(updatedEspecialidades);
      setNombre("");
      setOpenForm(false);
    } else {
      alert("Por favor ingrese un nombre para la especialidad.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DSW - POC Expo React Native</Text>
      <Text style={styles.subtitle}>Especialidades</Text>
      {!openForm && (
        <View style={styles.grid}>
          {especialidades.length ? (
            especialidades.map((especialidad) => (
              <View key={especialidad.id} style={styles.especialidadCard}>
                <Text style={styles.especialidadName}>
                  {especialidad.nombre}
                </Text>
                <MaterialCommunityIcons
                  style={styles.trash}
                  onPress={() => handleDelete(especialidad.id)}
                  name="trash-can"
                  size={30}
                  color="red"
                />
              </View>
            ))
          ) : (
            <Text>No hay especialidades para mostrar.</Text>
          )}
        </View>
      )}
      {openForm && (
        <View style={styles.form}>
          <Text style={styles.subtitle}>Agregar Especialidad</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de la especialidad"
            value={nombre}
            onChangeText={setNombre}
          />
          <Button title="Agregar" onPress={handleSubmit} />
        </View>
      )}
      <View style={styles.buttonContainer}>
        {openForm ? (
          <Text
            style={styles.buttonEspecialidad}
            onPress={() => setOpenForm(!openForm)}
          >
            Volver
          </Text>
        ) : (
          <Text
            style={styles.buttonEspecialidad}
            onPress={() => setOpenForm(!openForm)}
          >
            + Agregar especialidad
          </Text>
        )}

        <Link href={`/`} style={styles.button}>
          <Text style={styles.buttonText}>Ver médicos</Text>
        </Link>
      </View>
    </View>
  );
}
