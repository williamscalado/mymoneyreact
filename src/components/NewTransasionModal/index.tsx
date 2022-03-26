import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Api } from '../../services/Api'
import imgIncome from '../../assets/income.svg'
import imgOutincome from '../../assets/outcome.svg'
import imgClose from '../../assets/close.svg'
import { ButtonActiveType, ConteinerFormModal, ConteinerTypeTransasion } from './style'

interface propsFunctionModal {
    modalIsOpen: boolean,
    closeModal: () => void
}


export const NewTransasionModal = ({ modalIsOpen, closeModal }: propsFunctionModal) => {

    const [ButtonColorActive, setButtonColorActive ] = useState('')
    const [listCattegory, setListCattegory] = useState([])

    useEffect(() => {

        Api.get('categories')
            .then(response => {
                setListCattegory(response.data.categories)
                console.log(response.data.categories)
            })

    }, [])

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => {closeModal();setButtonColorActive('')}}
            className={"modal-style"}
            overlayClassName={"modal-style-overlay"}

        >

            <ConteinerFormModal>
                <img src={imgClose} className="button-close-modal" onClick={()=> {closeModal();setButtonColorActive('')}} alt="" />
                <h1>Cadastrar Transação</h1>
                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='Valor' />
                <ConteinerTypeTransasion>

                    <ButtonActiveType
                    type="button"
                    isActive = {ButtonColorActive === 'income'}
                    onClick={() => {setButtonColorActive('income')}}
                    color="green"
                  
                    >
                        <img src={imgIncome} alt="Entrada" />
                        <span>Entradas</span>
                    </ButtonActiveType>

                    <ButtonActiveType
                    type='button'
                    color='red'
                    isActive = {ButtonColorActive === 'expense'}
                    onClick={() => {setButtonColorActive("expense")}}
                    >
                        <img src={imgOutincome} alt="Entrada" />
                        <span>Saídas</span>
                    </ButtonActiveType>

                </ConteinerTypeTransasion>

                <select name="categoria" id="categoryid">
                    <option value="0" key="0">Selecine uma categoria</option>

                    {listCattegory.map(({ id, name }) => {

                        return (
                            <option value={id} key={id}>{name}</option>
                        )
                    })}

                </select>

                <button className="sendbuttonmodal">Cadastrar</button>


            </ConteinerFormModal>
        </Modal>
    )
}