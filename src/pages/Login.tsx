import AppLayout from "../components/partials/Layouts/AppLayout";
import AuthForm from "../features/auth/components/AuthForm";

const Login = () => {
    return (
        <AppLayout>
            <div className="flex items-center justify-center">
                <AuthForm />
            </div >
        </AppLayout >
    );
}

export default Login;
