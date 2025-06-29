import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Set up the mock behavior (optional here)
        when(mockApi.getData()).thenReturn("Mocked Data");

        // 3. Call method
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // 4. Verify the method was called with correct arguments
        verify(mockApi).getData(); // No args — verifies it was called once

        // Optional assertion
        assertEquals("Mocked Data", result);
    }
}
