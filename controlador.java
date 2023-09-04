import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ExemploController {

    @GetMapping("/mensagem")
    public String obterMensagem() {
        return "Olá do back-end Spring!";
    }
}
