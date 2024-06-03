interface Resources {
  "translation": {
    "zod-default-errors": {
      "required": "Este campo es obligatorio.",
      "minLength": "Por favor, introduzca al menos {minLength} caracteres.",
      "maxLength": "Por favor, introduzca no más de {maxLength} caracteres.",
      "email": "Por favor, introduzca email válido.",
      "number": "Por favor, introduzca un número válido.",
      "integer": "Por favor, introduzca un número entero válido."
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
            "stretch": "Estirar"
          }
        }
      }
    },
    "routes": {
      "management": "Gestión",
      "overview": "Resumen",
      "others": "Otros casos",
      "dashboard": "Tablero",
      "user": "Usuarios",
      "profile": "Cuenta",
      "create": "Crear",
      "edit": "Editar",
      "list": "Listar",
      "account": "Cuenta"
    },
    "hooks": {
      "use-auth": {
        "get-me-error-message": "Error al cargar tus datos",
        "get-me-error-description": "Por favor inicia sesión nuevamente"
      }
    },
    "pages": {
      "login": {
        "title": "Iniciar sesión en OLA",
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
        "no-data": "Sin datos"
      }
    }
  }
}

export default Resources;
