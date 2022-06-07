import Swal from 'sweetalert2'

export const AlertsMessage = async ({ mode, message }) => {
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    switch (mode) {
        case 'success':
            return Toast.fire({
                icon: 'success',
                title: `${message}`,
            })
        case 'error':
            return Toast.fire({
                icon: 'error',
                title: `${message}`,
            })
        default:
    }
}
