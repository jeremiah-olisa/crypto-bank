import { usePage } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { ObjectSchema } from 'yup';

const useTokenedForm = <TForm>(
    data: TForm,
    schema?: ObjectSchema<Record<keyof TForm, any>>,
) => {
    const page = usePage();
    return useForm(
        {
            _token: page.props.csrf_token,
            ...data,
        } as TForm & { _token: string },
        { schema },
    );
};

export default useTokenedForm;
