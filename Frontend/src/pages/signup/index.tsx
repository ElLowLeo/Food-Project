import { Input } from '../../components/input/index.tsx'
import { Button } from '../../components/button/index.tsx'
 
import { Container, Form } from './styles.ts'

export function Signup(){
    return (
        <Container>
            <div className="food">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="48" viewBox="0 0 43 48" fill="none"><path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/></svg>
                <h1>food explorer</h1>    
            </div>
            <Form>
                <h1>Crie sua conta</h1>
                <div className='div-input'>
                    <p>Seu nome</p>
                    <Input name={'Exemplo: Maria da Silva'} />
                </div>
                <div className='div-input'>
                    <p>Email</p>
                    <Input name={'Exemplo: exemplo@exemplo.com.br'} />
                </div>
                <div className='div-input senha'>
                    <p>Senha</p>
                    <Input 
                    name={'No mínimo 6 caracteres'}
                    />
                </div>
                <Button name={'Criar conta'}/>

                <a href="">Já tenho uma conta</a>
            </Form>
        </Container>
    )
}