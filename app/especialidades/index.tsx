import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Especialidades } from "../../mock/data";
import { Link } from "expo-router";
import {
  addEspecialidad,
  deleteEspecialidad,
  updateEspecialidad,
} from "../../functions/functions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/especialidades";

export default function Index() {
  const [openForm, setOpenForm] = useState<{
    isEditing: boolean;
    open: boolean;
  }>({
    isEditing: false,
    open: false,
  });
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState(null);
  const [especialidades, setEspecialidades] = useState(Especialidades);

  const handleDelete = (idEsp: number) => {
    const updatedData = deleteEspecialidad(especialidades, idEsp);
    setEspecialidades(updatedData);
  };

  const handleEdit = (id: number) => {
    setOpenForm({ isEditing: true, open: !openForm.open });
    setId(id);
  };

  const handleSubmit = () => {
    if (nombre.trim()) {
      if (openForm.isEditing) {
        if (!id) return;

        const updatedEspecialidades = updateEspecialidad(
          especialidades,
          nombre,
          id
        );

        setEspecialidades(updatedEspecialidades);
      } else {
        const updatedEspecialidades = addEspecialidad(especialidades, nombre);

        setEspecialidades(updatedEspecialidades);
      }

      setId(null);
      setNombre("");
      setOpenForm({ isEditing: false, open: !openForm.open });
    } else {
      alert("Por favor ingrese un nombre para la especialidad.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DSW - POC Expo React Native</Text>
      <Text style={styles.subtitle}>Especialidades</Text>
      {!openForm.open && (
        <View style={styles.grid}>
          {especialidades.length ? (
            especialidades.map((especialidad, index) => (
              <View key={index} style={styles.especialidadCard}>
                <Text style={styles.especialidadName}>
                  {especialidad.nombre}
                </Text>
                <View style={styles.actions}>
                  <MaterialCommunityIcons
                    style={styles.trash}
                    onPress={() => handleDelete(especialidad.id)}
                    name="trash-can"
                    size={23}
                    color="red"
                  />
                  <MaterialCommunityIcons
                    onPress={() => handleEdit(especialidad.id)}
                    name="pencil"
                    size={23}
                    color="blue"
                  />
                </View>
              </View>
            ))
          ) : (
            <Text>No hay especialidades para mostrar.</Text>
          )}
        </View>
      )}
      {openForm.open && (
        <View style={styles.form}>
          {openForm.isEditing ? (
            <Text style={styles.subtitle}>Editar Especialidad</Text>
          ) : (
            <Text style={styles.subtitle}>Agregar Especialidad</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Nombre de la especialidad"
            value={nombre}
            onChangeText={setNombre}
          />
          {openForm.isEditing ? (
            <Button title="Editar" onPress={handleSubmit} />
          ) : (
            <Button title="Agregar" onPress={handleSubmit} />
          )}
        </View>
      )}
      <View style={styles.buttonContainer}>
        {openForm.open ? (
          <Text
            style={styles.buttonEspecialidad}
            onPress={() =>
              setOpenForm({ isEditing: false, open: !openForm.open })
            }
          >
            Volver
          </Text>
        ) : (
          <Text
            style={styles.buttonEspecialidad}
            onPress={() =>
              setOpenForm({ isEditing: false, open: !openForm.open })
            }
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
