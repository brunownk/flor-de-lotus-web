interface Resources {
  "translation": {
    "zod-default-errors": {
      "required": "Este campo es obligatorio.",
      "minLength": "Por favor, introduzca al menos {minLength} caracteres.",
      "maxLength": "Por favor, introduzca no más de {maxLength} caracteres.",
      "minValue": "Por favor, introduzca un valor mayor o igual a {minValue}.",
      "maxValue": "Por favor, introduzca um valor menor o igual a {maxValue}.",
      "email": "Por favor, introduzca email válido.",
      "number": "Por favor, introduzca un número válido.",
      "integer": "Por favor, introduzca un número entero válido.",
      "invalid": "Por favor, introduzca un valor válido."
    },
    "layouts": {
      "public": {
        "welcome-back": "Hola, bienvenido de nuevo"
      },
      "private": {
        "header": {
          "search-pages": {
            "search-placeholder": "Buscar...",
            "not-found": {
              "title": "No encontrado",
              "no-results": "No hay resultados para",
              "suggestion": "Intente verificar errores de escritura o utilizar palabras completas."
            }
          },
          "locales": {
            "br": "Portugués",
            "en": "Inglés",
            "es": "Español"
          },
          "section": {
            "settings": "Configuración",
            "logout": "Salir"
          },
          "configs": {
            "title": "Configuración",
            "theme": "Modo",
            "stretch": "Estirar",
            "tables-density": "Densidad de tablas",
            "fullscreen": "Pantalla completa",
            "layout": "Diseño"
          }
        }
      }
    },
    "routes": {
      "overview": "Resumen",
      "management": "Gestión",
      "fleet": "Flota",
      "others": "Otros casos",
      "home": "Inicio",
      "profile": "Cuenta",
      "user": "Usuarios",
      "user-list": "Usuarios",
      "user-create": "Crear Usuario",
      "pet": "Mascotas",
      "pet-list": "Mascotas",
      "pet-create": "Crear Mascota",
      "create": "Crear",
      "edit": "Editar",
      "list": "Listar"
    },
    "hooks": {
      "use-auth": {
        "get-me-error-message": "Error al cargar tus datos",
        "get-me-error-description": "Por favor inicia sesión nuevamente"
      }
    },
    "pages": {
      "login": {
        "title": "Iniciar sesión",
        "username-label": "Usuario",
        "username-placeholder": "Digite su usuario",
        "password-label": "Contraseña",
        "password-placeholder": "Digite su contraseña",
        "submit": "Entrar",
        "error-message": "Error al iniciar sesión",
        "error-description": "Por favor verifique sus credenciales"
      },
      "account": {
        "title": "Cuenta"
      },
      "users": {
        "list": {
          "title": "Usuarios",
          "name": "Nombre",
          "username": "Usuario",
          "email": "Email",
          "created-at": "Creado en",
          "create-button": "Nuevo Usuario",
          "delete-confirm": "¿Estás seguro de que deseas eliminar este usuario?",
          "delete-success": "Usuario eliminado",
          "delete-error-message": "Error al eliminar usuario",
          "delete-error-description": "Por favor intente nuevamente",
          "filter-type": "Filtrar",
          "filter-type-all": "Todos",
          "filter-type-active": "Activos",
          "filter-search": "Buscar",
          "filter-seach-placeholder": "Nombre, usuario o email",
          "error-fetching-message": "Error al cargar usuarios",
          "error-fetching-description": "Por favor recargar la página"
        },
        "create": {
          "title": "Crear nuevo usuario",
          "create-error-message": "Error al crear usuario",
          "create-error-description": "Por favor intente nuevamente",
          "create-success-message": "Usuario creado"
        },
        "edit": {
          "title": "Editar",
          "get-error-message": "Error al cargar usuario",
          "get-error-description": "Por favor intente nuevamente"
        }
      },
      "pets": {
        "list": {
          "title": "Mascotas",
          "name": "Nombre",
          "owner": "Dueño",
          "breed": "Raza",
          "type": "Tipo",
          "created-at": "Creado en",
          "create-button": "Nuevo Usuario",
          "delete-confirm": "¿Estás seguro de que deseas eliminar este mascota?",
          "delete-success": "Mascota eliminado",
          "delete-error-message": "Error al eliminar mascota",
          "delete-error-description": "Por favor intente nuevamente",
          "filter-type": "Filtrar",
          "filter-type-all": "Todos",
          "filter-type-active": "Activos",
          "filter-search": "Buscar",
          "filter-seach-placeholder": "Nombre",
          "error-fetching-message": "Error al cargar mascotas",
          "error-fetching-description": "Por favor recargar la página"
        },
        "create": {
          "title": "Crear nuevo mascota",
          "create-error-message": "Error al crear mascota",
          "create-error-description": "Por favor intente nuevamente",
          "create-success-message": "Mascota creado"
        },
        "edit": {
          "title": "Editar",
          "get-error-message": "Error al cargar mascota",
          "get-error-description": "Por favor intente nuevamente"
        }
      },
      "pet-breeds": {
        "list": {
          "title": "Razas",
          "name": "Nombre",
          "created-at": "Creado en",
          "create-button": "Nueva Raza",
          "delete-confirm": "¿Estás seguro de que deseas eliminar esta raza?",
          "delete-success": "Raza eliminado",
          "delete-error-message": "Error al eliminar raza",
          "delete-error-description": "Por favor intente nuevamente",
          "filter-search": "Buscar",
          "filter-seach-placeholder": "Nombre",
          "error-fetching-message": "Error al cargar razas",
          "error-fetching-description": "Por favor recargar la página"
        },
        "create": {
          "title": "Crear nueva raza",
          "create-error-message": "Error al crear raza",
          "create-error-description": "Por favor intente nuevamente",
          "create-success-message": "Raza creado"
        },
        "edit": {
          "title": "Editar",
          "get-error-message": "Error al cargar raza",
          "get-error-description": "Por favor intente nuevamente"
        }
      },
      "pet-types": {
        "list": {
          "title": "Tipos",
          "name": "Nombre",
          "created-at": "Creado en",
          "create-button": "Nuevo Tipo",
          "delete-confirm": "¿Estás seguro de que deseas eliminar este tipo?",
          "delete-success": "Tipo eliminado",
          "delete-error-message": "Error al eliminar tipo",
          "delete-error-description": "Por favor intente nuevamente",
          "filter-search": "Buscar",
          "filter-seach-placeholder": "Nombre",
          "error-fetching-message": "Error al cargar tipos",
          "error-fetching-description": "Por favor recargar la página"
        },
        "create": {
          "title": "Crear nuevo tipo",
          "create-error-message": "Error al crear tipo",
          "create-error-description": "Por favor intente nuevamente",
          "create-success-message": "Tipo creado"
        },
        "edit": {
          "title": "Editar",
          "get-error-message": "Error al cargar tipo",
          "get-error-description": "Por favor intente nuevamente"
        }
      },
      "not-found": {
        "title": "¡Lo siento, página no encontrada!",
        "description": "Lo siento, no pudimos encontrar la página que está buscando. ¿Quizás escribió mal la URL? Asegúrese de revisar su ortografía.",
        "home-button": "Ir a la página de inicio"
      }
    },
    "forms": {
      "user": {
        "name-label": "Nombre",
        "name-placeholder": "Digite su nombre",
        "username-label": "Usuario",
        "username-placeholder": "Digite su usuario",
        "email-label": "Email",
        "email-placeholder": "Digite su email",
        "old-password-label": "Contraseña Antigua",
        "old-password-placeholder": "Digite su contraseña antigua",
        "new-password-label": "Nueva Contraseña",
        "new-password-placeholder": "Digite su nueva contraseña",
        "password-label": "Contraseña",
        "password-placeholder": "Digite la contraseña",
        "confirm-password-label": "Confirmar Contraseña",
        "confirm-password-placeholder": "Confirme su contraseña",
        "password-min-length": "Contraseña debe tener al menos {{min}} caracteres",
        "edit-button": "Guardar Ediciones",
        "create-button": "Crear Usuario",
        "file-allowed-types": "Permitido {{types}}",
        "file-max-size": "tamaño máximo de {{size}} Mb",
        "file-upload": "Subir",
        "passwords-not-match": "Las contraseñas no coinciden",
        "update-error-message": "Error al actualizar usuario",
        "update-error-description": "Por favor intente nuevamente",
        "update-success-message": "Usuario actualizado",
        "update-password-error-message": "Error al actualizar contraseña",
        "update-password-error-description": "Por favor, verifique su contraseña actual",
        "update-password-success-message": "Contraseña actualizada"
      },
      "pet": {
        "name-label": "Nombre",
        "name-placeholder": "Digite el nombre",
        "owner-label": "Dueño",
        "owner-placeholder": "Seleccione el dueño",
        "breed-label": "Raza",
        "breed-placeholder": "Seleccione la raza",
        "type-label": "Tipo",
        "type-placeholder": "Seleccione el tipo",
        "edit-button": "Guardar Ediciones",
        "create-button": "Crear Mascota",
        "file-allowed-types": "Permitido {{types}}",
        "file-max-size": "tamaño máximo de {{size}} Mb",
        "file-upload": "Subir",
        "passwords-not-match": "Las contraseñas no coinciden",
        "update-error-message": "Error al actualizar mascota",
        "update-error-description": "Por favor intente nuevamente",
        "update-success-message": "Mascota actualizado"
      },
      "pet-breed": {
        "name-label": "Nombre",
        "name-placeholder": "Digite el nombre",
        "type-label": "Tipo",
        "type-placeholder": "Seleccione el tipo",
        "edit-button": "Guardar Ediciones",
        "create-button": "Crear Raza"
      },
      "pet-type": {
        "name-label": "Nombre",
        "name-placeholder": "Digite el nombre",
        "edit-button": "Guardar Ediciones",
        "create-button": "Crear Tipo"
      }
    },
    "actions": {
      "edit": "Editar",
      "delete": "Eliminar",
      "view": "Ver",
      "delete-confirm-description": "¿Estás seguro de que quieres eliminar?",
      "delete-success": "Item eliminado",
      "cancel": "Cancelar"
    },
    "components": {
      "button": {
        "create": "Crear",
        "filter": "Filtrar",
        "submit-filter": "Filtrar",
        "clear": "Limpiar"
      },
      "single-upload-photo": {
        "upload": "Subir foto"
      },
      "data-grid": {
        "show-total-pages": "{{from}} - {{to}} de {{total}} artículos"
      }
    },
    "queries": {
      "user": {
        "get-me": {
          "error-message": "Error al cargar tus datos",
          "error-description": "Por favor inicia sesión nuevamente"
        },
        "get": {
          "error-message": "Error al cargar usuario",
          "error-description": "Por favor intente nuevamente"
        },
        "list": {
          "error-message": "Error al cargar usuarios",
          "error-description": "Por favor intente nuevamente"
        }
      }
    }
  }
}

export default Resources;
